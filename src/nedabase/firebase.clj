;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ns nedabase.firebase
  (:require [matchbox.core :as m]
            [nedabase.parsing-functions :as parse]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; (defn test-read
;   []
;   (taika/read "https://nedabase.firebaseio.com" "/test"))

(def root (m/connect "https://nedabase.firebaseio.com"))

(def tester "hi")
