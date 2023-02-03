# used Commands:

- docker build -t voucher-wallet .
- docker run -ti -p 8000:8000 voucher-wallet bash
- python manage.py makemigrations
- python manage.py migrate
- python manage.py runserver 0:8000
- open http://127.0.0.1:8001/
- pip list --format=freeze
- ssh root@167.71.62.11
- docker-compose down
- docker-compose up -d
- docker ps
- docker exec -ti xxxxxxxx bash
- docker pull registry.gitlab.propulsion-home.ch/full-stack/batch-22-nov-2022/personal-projects/voucher-wallet:latest
- docker image ls
- cd /home/gitlab-runner/builds/xxxxxx/s
- python manage.py createsuperuser
- -find . -name "000*.py" -delete

# Droplet

- cd /
- nano /etc/ssh/sshd_config
- ufw enable
- ufw allow 22
- ufw allow 80 / 443

# Certbot

- sudo apt-get remove certbot
- sudo snap remove certbot
- https://certbot.eff.org/instructions?ws=other&os=ubuntubionic
- https://mhagemann.medium.com/correct-way-to-delete-a-certbot-ssl-certificate-e8ee123e6e01
- connect droplet
- cd /home/gitlab-runner/builds/xxxxxx/0/full-stack/batch-22-nov-2022/personal-projects/voucher-wallet
- docker-compose -f docker-compose.deploy.yml down --remove-orphans

# nginx

- cd cd /home/gitlab-runner/builds/xxxxxx/0/full-stack/batch-22-nov-2022/personal-projects/voucher-wallet
- docker-compose -f docker-compose.deploy.yml down --remove-orphans

# frontend

- npx create-react-app frontend
- cd frontend
- npm start

# local Docker

- cd project Path before backend!
- docker-compose -f docker-compose.yml pull
- docker-compose -f docker-compose.yml down --remove-orphans
- docker-compose -f docker-compose.yml up -d

# remote Docker

- ssh root@167.71.62.11
- cd /home/gitlab-runner/builds/Nr4y8HHg/0/full-stack/batch-22-nov-2022/personal-projects/voucher-wallet
- docker-compose -f docker-compose.deploy.yml pull
- docker-compose -f docker-compose.deploy.yml down --remove-orphans
- docker-compose -f docker-compose.deploy.yml up -d

# scriptbuilder

- cd script
- scriptbuilder.sh

# Database

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

# delete Migration Files

find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
