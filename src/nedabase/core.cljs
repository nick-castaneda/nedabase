(ns nedabase.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state (atom {:entry ""}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defui Counter
    ;; ??? Declares what we're querying????
    static om/IQuery
    (query [this]
      [:count])
    ;; Makes this ui a javascript object
    Object
    (render [this]
      ;; I think that the stuff in the brackets grabs the count from the
      ;; app-state; it's part of the UI's this beacuse of the reconciler
      (let [{:keys [entry]} (om/props this)]
        (dom/div nil
          (dom/textarea nil "Make an entry here!")
          (dom/button nil "NEDA")))))













;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(comment
  ;;;;; EXAMPLE 4
  ;; Define the app-state
  (def app-state (atom {:count 0}))

  ;; Takes a state, a key and params. If there's a value???, find the key
  ;; in the state and return the value
  (defn read [{:keys [state] :as env} key params]
    (let [st @state]
      (if-let [[_ value] (find st key)]
        {:value value}
        {:value :not-found})))

  ;; Takes a state, a key, and params. If increment is run, increase the count
  (defn mutate [{:keys [state] :as env} key params]
    (if (= 'increment key)
      {:value {:keys [:count]}
       :action #(swap! state update-in [:count] inc)}
      {:value :not-found}))

  ;; Renders a UI
  (defui Counter
    ;; ??? Declares what we're querying????
    static om/IQuery
    (query [this]
      [:count])
    ;; Makes this ui a javascript object
    Object
    (render [this]
      ;; I think that the stuff in the brackets grabs the count from the
      ;; app-state; it's part of the UI's this beacuse of the reconciler
      (let [{:keys [count]} (om/props this)]
        (dom/div nil
          (dom/span nil (str "Count: " count))
          (dom/button
            ;; Instead of nil, there's a js function that runs the
            ;; increment transaction instead of directly changing the state
            #js {:onClick
                 (fn [e] (om/transact! this '[(increment)]))}
            "Click me!")))))

  ;; Reconciler grabs the app-state and watches it, also sets the parser
  (def reconciler
    (om/reconciler
      {:state app-state
       :parser (om/parser {:read read :mutate mutate})}))

  ;; add-root! takes the reconciler and the root class and renders them
  ;; together on the DOM
  (om/add-root! reconciler
    Counter (gdom/getElement "app"))
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(comment
  ;;;;; EXAMPLE 3 - Mutates and Reads
  (defn read
    [{:keys [state] :as env} key params]
    (let [st @state]
      (if-let [[_ v] (find st key)]
        {:value v}
        {:value :not-found})))

  (defn mutate
    [{:keys [state] :as env} key params]
    (if (= 'increment key)
      {:value {:keys [:count]}
       :action #(swap! state update-in [:count] inc)}
      {:value :not-found}))

  (def my-parser (om/parser {:read read :mutate mutate}))

  (def my-state (atom {:count 0}))

  (my-parser {:state my-state} '[(increment)])

  (my-parser {:state my-state} [:count :title])
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(comment
  ;;;;; EXAMPLE 2 - With App State
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
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(comment
  ;; EXAMPLE 1 - No App State
  (defui HelloWorld
    Object
    (render [this]
      (dom/div nil (get (om/props this) :title))))

  (def hello (om/factory HelloWorld))

  (js/ReactDOM.render
    (apply dom/div nil
      (map #(hello {:react-key %
                    :title (str "Hello " %)})
        '("Nick" "MARC" "Jeka" "Brody")))
    (gdom/getElement "app"))
)







