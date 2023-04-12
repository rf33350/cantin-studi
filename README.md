# Déploiement du site Cantin | Photographe

Ce fichier a pour but de décrire la démarche à suivre pour le déploiement en local et en ligne du projet

## Tech Stack

**Générateur de site statique** Eleventy

**Headeless CMS** forestry.io

**Front** HTML+CSS+JS+Bootstrap

## Deploiement local

Pour déployer ce site en local, il faut tout d'abord récupérer la dernière version à jour:

```bash
  git clone https://github.com/rf33350/cantin-studi.git
```

Vous pouvez ensuite ouvrir le projet avec un éditeur de code.

afin de pouvoir effectuer les changement et les visualiser en local, il est nécessaire d'installer eleventy:

```bash
  npm install -g  @11ty/eleventy
```

Une fois les modifications apportées au code, vous pouvez les visualiser en lancant la commande:

```bash
  eleventy --serve
```

## Deploiement en ligne

Si vous voulez mettre en ligne les modifications que vous avez apporté, il faudra executer les commandes git afin de mettre à jour le repository Github.

Le site étant hébergé sur Netlify, un simple push git modifiera le site. 

Le lien vers [le site en ligne](https://cantin-rf-studi.netlify.app/).

Le lien vers [le projet netlify](https://app.netlify.com/sites/cantin-rf-studi/overview).

Le site intègre une partie *headless CMS* est assurée par [forestry.io](https://app.forestry.io/sites/zihnutsmg9y2ia/)

Ce CMS a pour but de pouvoir modifier le contenu affiché sur le site sans coder une ligne. 

Pour modifier la page des tarifs il suffit de modifier le contenu de [cette page](https://app.forestry.io/sites/zihnutsmg9y2ia/#/pages/src-prices-prices-md/).

Il est également possible de mettre à jour la galerie du site en uploadant de nouvelles images via [cette page](https://app.forestry.io/sites/zihnutsmg9y2ia/#/media/).

A noter que le CMS a été configuré de telle manière que lorsqu'on fait une modification sur forestry il met à jour directement le site web.

## Support

Pour tout besoin d'aide me contacter par [ce mail](mailto:faure@mail.fr).
