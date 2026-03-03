# Usa un'immagine lèggera di BusyBox
FROM busybox:1.36.1

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file del sito statico nel container
COPY . /app

# Esponi la porta 80
EXPOSE 80

# Avvia il server httpd di BusyBox
# -f : esegue in foreground
# -p 80 : in ascolto sulla porta 80
# -h /app : directory radice del server web
CMD ["httpd", "-f", "-p", "80", "-h", "/app"]
