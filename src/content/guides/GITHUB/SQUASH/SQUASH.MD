1. Öffne das `.gitconfig` Dokument, welches sich in `~/.gitconfig` befindet, oder öffne es einfach über das Terminal mit `git config --global -e`

   ![Screenshot 1](content/guides/GITHUB/SQUASH/screen1.png)

2. Füge nun einen neuen Abschnitt 
   

	```
   
	[alias]
   
	squash = "!f(){ git reset --soft HEAD~${1} && git commit --edit -m\"$(git log --format=%B --reverse HEAD..HEAD@{1})\"; };f"
   
	```
   hinzu

   ![Screenshot 2](content/guides/GITHUB/SQUASH/screen2.png)

   ![Screenshot 3](content/guides/GITHUB/SQUASH/screen3.png)

3. Speichere nun das Dokument; jetzt kann der Befehl `git squash [Anzahl der Commits]` genutzt werden

   ![Screenshot 4](content/guides/GITHUB/SQUASH/screen4.png)

4. Um den Squash hochzuladen, benutze das Syntax `git push --force [REMOTE] [BRANCH]`

   ![Screenshot 5](content/guides/GITHUB/SQUASH/screen5.png)