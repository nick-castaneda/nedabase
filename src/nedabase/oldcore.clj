;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; (ns nedabase.core
;   (:require [nedabase.parsing :as parse]
;             [nedabase.datomic :as d]
;             [nedabase.seed :as seed]
;             [ring.middleware.reload :refer [wrap-reload]]
;             [compojure.core :refer [defroutes GET POST DELETE ANY context]]
;             [compojure.handler :refer [site] :as handler]
;             [compojure.route :refer [files not-found] :as route]
;             [org.httpkit.server :refer [run-server]])
;   (:gen-class))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; (defroutes nedabase-routes
;   (route/resources "/")
;   (GET "/" [] "Hello World"))

; ;;;

; (defn -main []
;   (run-server (site (wrap-reload nedabase-routes)) {:port 4003})
;   (println "Running on port 4003"))
