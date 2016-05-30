(defproject nedabase "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :username ["npcastaneda@gmail.com"]
                                   :password ["0ac7786e-0a96-4674-8190-90f0409c9a2d"]}}
  :datomic {:schemas ["resources" ["schema.edn"]]}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.logic "0.8.10"]
                 [org.clojure/clojurescript "1.7.170"]
                 [matchbox "0.0.8"]
                 [com.datomic/datomic-pro "0.9.5350" :exclusions [joda-time]]
                 [ring/ring "1.4.0"]
                 [compojure "1.5.0"]
                 [http-kit "2.1.18"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :main nedabase.core
  :aot [nedabase.core])
