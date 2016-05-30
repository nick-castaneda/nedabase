;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ns nedabase.datomic
  (:use [datomic.api :as d]))

(def uri "datomic:dev://datomicdb:4334/nedabase")
(def conn (d/connect uri))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;                          Create Functions                          ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-entry
  "Creates an entry in the nedabase"
  [entry-text]
  @(d/transact conn [{:db/id #db/id[:db.part/user]
                      :entry/text entry-text}]))

(defn create-purchase
  "Creates a purchase in the nedabase"
  ([related-entry purchase-category purchase-cost]
    @(d/transact conn [{:db/id #db/id[:db.part/user]
                        :purchase/entry related-entry
                        :purchase/category purchase-category
                        :purchase/Cost purchase-cost}]))
  ([related-entry purchase-category purchase-cost purchase-subcategory]
    @(d/transact conn [{:db/id #db/id[:db.part/user]
                        :purchase/entry related-entry
                        :purchase/category purchase-category
                        :purchase/Cost purchase-cost
                        :purchase/subcategory purchase-subcategory}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;                           Read Functions                           ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn get-entry-from-text
  "Takes in entity text and returns entity eid"
  [entry-text]
  (((into []
    (d/q '[:find ?e
           :in $ ?entry-text
           :where [?e :entry/text ?entry-text]]
      (d/db (d/connect uri)) entry-text)) 0) 0))






;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;                          Delete Functions                          ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-all-entities
  "Returns all entities in the database"
  []
  (d/q '[:find ?e
         :where (or [?e :entry/text ?anything]
                    [?e :purchase/category ?anything])]
    (d/db (d/connect uri))))

(defn delete-entity
  "Delete entry"
  [entity-id]
  @(d/transact conn [{:db/id #db/id[:db.part/user]
                      :db/excise entity-id}]))










