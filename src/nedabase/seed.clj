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

(def example-entries ["supertest $sniooibnwef nosdfsdofni 32.32 sdafdsafdsf fdfdsafdsf dfalklnlas $fds"
                      "Nick is chill"
                      "Market visit $asdfdsaf 23"])

(defn seed-examples
  "Post all the example entries"
  []
  (map p/post-entry example-entries))
