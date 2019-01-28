# Cloud Events

A simple CRUD application to manage your events.

# Setup environment

* [RVM and rails for Ubuntu](https://github.com/rvm/ubuntu_rvm)

```
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt-get update
sudo apt-get install rvm

# Login and logout or restart the machine

rvm install 2.3.3
rvm list
ruby -v
gem install rails -v 5.0.1 

```

* [PostgreSQL for Ubuntu](https://www.postgresql.org/download/linux/ubuntu/)


```
sudo apt-get install postgresql postgresql-contrib 

sudo apt-get install postgresql-server-dev-{pg.version}
```
Where `{pg.version}` refers to the version of postgresql installed, for example `9.5` 

The database to be created for development environment is `cloudcrud_development` with the user `cloudcrud` and password `cloudcrud` using password authentication (check the `pg_hba.conf` file in case of errors, and restart the service after doing changes).


* NodeJS

``` sudo apt-get install nodejs```

# Development

Start the application with the following commands (under the root directory):

```
bundle
rails db:migrate
rails s
```

For a run as a daemon, instead of `rails s` use `rails s -d -p 8080 -b 0.0.0.0`


# Gems

* [rails](https://github.com/rails/rails)
* [devise](https://github.com/plataformatec/devise)
* [react-rails](https://github.com/reactjs/react-rails)
* [twitter-bootstrap-rails](https://github.com/seyhunak/twitter-bootstrap-rails)

# Resources

* [PostgreSQL basic management](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)
* [Simple CRUD example](https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419)
* [Use of devise](https://learnetto.com/tutorials/using-devise-with-react)
