1. Öffne deine Git Konfigurationsdatei (`.gitconfig`) durch die Verwendung von `git config --global -e`

   ![Screenshot 1](content/guides/GITHUB/SQUASH/screen1.png)

2. Füge nun den folgenden Code-Ausschnitt ein.

	```
    [alias]
	squash = "!f(){ git reset --soft HEAD~${1} && git commit --edit -m\"$(git log --format=%B --reverse HEAD..HEAD@{1})\"; };f"
	```

   ![Screenshot 2](content/guides/GITHUB/SQUASH/screen2.png)

3. Speichere nun das Dokument.

   Jetzt kann der Befehl `git squash [Anzahl der Commits]` genutzt werden

   ![Screenshot 3](content/guides/GITHUB/SQUASH/screen3.png)

4. Um den Squash hochzuladen, benutze das Syntax `git push --force [REMOTE] [BRANCH]`

   ![Screenshot 5](content/guides/GITHUB/SQUASH/screen4.png)
