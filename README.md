```
# start database
docker compose up db -d

# install mysql client and import DB
brew install mysql
unzip airquality_data.zip
mysql --protocol=tcp --host=127.0.0.1 --user=root --port=23306 --password=p4ssw0rd --default-character-set=utf8 --comments --database=airdata_1  < "./Dump20200705.sql"

# start other components
docker compose up -d
```
Then open http://localhost:18080
