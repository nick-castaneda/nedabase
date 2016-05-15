;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ns nedabase.parsing-methods
  (:require [clojure.string :as str]
            [clojure.core.logic]))

;;   $ = purchase (category subcat(op) amount)
;;   @ = person (first-last)
;;   # = topic
;;   % =
;;   &
;;   *
;;   ^

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn purchase-method
  ""
  [entry]
  (cond
    (>= (count entry) 3) (println (str (first entry) "**" (nth entry 1) "**" (nth entry 2)))
    (= (count entry) 2) (println (str (first entry) "**" (nth entry 1)))
    :else (println "ERROR")))

(defn first-char
  ""
  [entry]
  (cond
    (= (first (first entry)) \$) (purchase-method entry)
    (= (first (first entry)) \@) (println "person")
    (= (first (first entry)) \#) (println "topic")
    :else (println (first entry))))

(defn check-entry
  ""
  [entry]
  (first-char entry)
  (if-not (empty? (rest entry))
    (check-entry (rest entry))))


(def example-entry "fhladdsf sdafdsafdsf fdfdsafdsf $klsdff 2939.2 dfalklnlas $fds")
(def split-entry (str/split example-entry #" "))

; (defn cfrl
;   [entry]
;   (first-char (first entry))
;   (rest entry))

; (defn check-entry
;   ""
;   [words]
;   (loop [entry words]
;     (if (empty? entry)
;       (println "Entry reviewed!")
;       (recur check-entry (cfrl entry)))))











;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn printfizzbuzz
  [i]
  (cond
    (= 0 (rem i 5) (rem i 3)) (println "fizzbuzz")
    (= 0 (rem i 3)) (println "fizz")
    (= 0 (rem i 5)) (println "buzz")
    :else (println i)))

(defn fizzbuzz
  [num]
  (loop [i 1]
    (when (<= i num)
      (printfizzbuzz i)
      (recur (inc i)))))


