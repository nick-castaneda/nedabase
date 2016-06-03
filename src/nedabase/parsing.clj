;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ns nedabase.parsing
  (:require [clojure.string :as str]
            [clojure.core.logic]
            [nedabase.datomic :as d]))

;;   $ = purchase (category subcat(op) amount)
;;   @ = person (first-last)
;;   # = topic
;;   % =
;;   & = Todo
;;   *
;;   ^

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-float
  "Helper function to turn a number-string into a floating point value"
  [cost-string]
  (if (re-matches #"^[^\.]*$" cost-string)
    (read-string (str cost-string ".00"))
    (read-string cost-string)))

(defn purchase-function
  ""
  [entry entry-eid]
  (if (>= (count entry) 2)
    (let [purch-vect (into [] entry)]
      (cond
        (re-matches #"^([0-9]|[.])*$" (purch-vect 1))
          (d/create-purchase entry-eid (purch-vect 0) (make-float (purch-vect 1)))
        (re-matches #"^([0-9]|[.])*$" (purch-vect 2))
          (d/create-purchase entry-eid (purch-vect 0) (make-float (purch-vect 2)) (purch-vect 1))
        :else "Error! No cash amount!"))
    (println "Error! Too short")))

(defn first-char
  ""
  [entry entry-eid]
  (cond
    (= (ffirst entry) \$) (purchase-function entry entry-eid)
    (= (ffirst entry) \@) (println "person")
    (= (ffirst entry) \#) (println "topic")
    :else (println (first entry))))

(defn check-entry
  ""
  [entry entry-eid]
  (first-char entry entry-eid)
  (if-not (empty? entry)
    (recur (rest entry) entry-eid)
    (println "Done!")))

(defn post-entry
  ""
  [entry-text]
  (d/create-entry entry-text)
  (d/get-entry-from-text entry-text)
  (check-entry (str/split entry-text #" ") (d/get-entry-from-text entry-text)))



(comment

)












