(ns nedabase.seed
  (:require [nedabase.datomic :as d]
            [nedabase.parsing :as p]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn clear-database
  "Clears database"
  []
  (let [entities (d/get-all-entities)]
    (map #(d/delete-entity (% 0) ) entities)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def example-entries ["I hung out with my bros today and we went to the Virgil $Social bars 32.32 This Friday was chill AF."
                      "I really like eating churros."
                      "Grabbed some groceries for work $Food 23"])

(defn seed-examples
  "Post all the example entries"
  []
  (map p/post-entry example-entries))
