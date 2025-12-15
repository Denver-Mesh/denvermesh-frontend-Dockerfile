#############################
Created By Andrew Himelstieb
andrew@denvermesh.org
#############################
This repo contains all the 
files required to build the docker image for the Volto Frontend
of the https://DenverMesh.org website.

Just clone the repo, and use: sudo docker buildx build -t [dockerhub username]/denvermesh-frontend:prod .
to build the image.

In the docker-compose.denmesh.yml you just need to match the above tag in the area...

frontend:
    image:  <---

in the docker-compose.denvermesh.yml file.

Any problems or difficulties, please don't hesitate to reach out on the 
DenverMesh discord or use the contact form at https://denvermesh.org/contact

We also appreciate any donations through the  sponsorship button! :) 
