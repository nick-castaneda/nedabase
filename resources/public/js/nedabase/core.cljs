(ns nedabase.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(comment
(defui HelloWorld
  Object
  (render [this]
    (dom/div nil (get (om/props this) :title))))

(def hello (om/factory HelloWorld))

(js/ReactDOM.render
  ;; CHANGED
  (apply dom/div nil
    (map #(hello {:react-key %
                  :title (str "Hello " %)})
      '("Nick" "MARC" "Jeka" "Brody")))
  (gdom/getElement "app"))
)

(def app-state (atom {:count 0}))

(defui Counter
  Object
  (render [this]
    (let [{:keys [count]} (om/props this)]
      (dom/div nil
        (dom/span nil (str "Count: " count))
        (dom/button
          #js {:onClick
               (fn [e]
                 (swap! app-state update-in [:count] inc))}
          "Click me!")))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Counter (gdom/getElement "app"))
