cd documentation
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "https://github.com/GeoMatDigital/app-geomat.git}" master:gh-pages > /dev/null 2>&1