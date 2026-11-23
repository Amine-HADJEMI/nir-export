# NIR Export — maquettes

Site statique (HTML/CSS/JS, sans build).

- `index.html` : page de choix entre les 3 propositions
- `proposition-1.html` : Signature (noir/rouge)
- `proposition-2.html` : Showroom (clair, catalogue filtrable)
- `proposition-3.html` : Arrivages (affiche, WhatsApp)
- `assets/data.js` : véhicules et contacts, partagés par les 3 pages

## Voir en local

```
python -m http.server 8765
```
puis ouvrir http://localhost:8765

## Mettre en ligne sur GitHub Pages (sans ligne de commande)

1. Sur github.com : **New repository** → nom `nir-export` → Public → Create.
2. Cliquer **uploading an existing file**, glisser tout le contenu du dossier `site/`
   (index.html, les 3 propositions, le dossier `assets`, `.nojekyll`) → Commit.
3. **Settings → Pages** → Source : *Deploy from a branch* → `main` / `(root)` → Save.
4. Le site est en ligne 1 à 2 minutes après sur `https://<compte>.github.io/nir-export/`.
