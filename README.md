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

sudo apt-get postgresql-server-dev-{pg.version}
```
Where `{pg.version}` refers to the version of postgresql installed for example `9.5` 

The database to be created for development environment is `cloudcrud_development` with the user `cloudcrud` and password `cloudcrud` using password authentication (check the `pg_hba.conf` file in case of errors).

* NodeJS

``` sudo apt-get install nodejs```

# Development

Start the application with the following commands (under the root directory):

```
bundle
rails s
```

# Gems

* [rails](https://github.com/rails/rails)
* [devise](https://github.com/plataformatec/devise)
* [react-rails](https://github.com/reactjs/react-rails)
* [twitter-bootstrap-rails](https://github.com/seyhunak/twitter-bootstrap-rails)

