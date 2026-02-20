# 🚀 Instrucciones de Deploy para Hostinger - Rosinaldo Villegas

## 📦 Archivo de Deploy
**Archivo:** `rosinaldovillegas-hostinger-deploy.zip`  
**Tamaño:** 63MB  
**Ubicación:** `/Users/marcelogonzalez/Scripts_Python/rosinaldovillegas.com/electian/`

## 🔧 Pasos para Deploy en Hostinger

### 1. **Acceder al Panel de Control de Hostinger**
- Inicia sesión en tu cuenta de Hostinger
- Ve al panel de control (hPanel)
- Selecciona tu dominio/hosting

### 2. **Acceder al Administrador de Archivos**
- En el panel de control, busca "Administrador de Archivos" o "File Manager"
- Haz clic para abrir el administrador de archivos web

### 3. **Navegar al Directorio Público**
- Navega hasta la carpeta `public_html` (directorio raíz de tu sitio web)
- Si hay archivos existentes, haz una copia de seguridad antes de continuar

### 4. **Limpiar el Directorio (Opcional)**
- Si es un sitio nuevo, puedes eliminar los archivos por defecto de Hostinger
- Mantén solo los archivos necesarios como `.htaccess` si existe

### 5. **Subir el Archivo ZIP**
- Haz clic en "Subir" o "Upload" en el administrador de archivos
- Selecciona el archivo `rosinaldovillegas-hostinger-deploy.zip`
- Espera a que se complete la subida (puede tomar varios minutos debido al tamaño)

### 6. **Extraer el Archivo ZIP**
- Una vez subido, haz clic derecho sobre el archivo ZIP
- Selecciona "Extraer" o "Extract"
- Extrae el contenido directamente en `public_html`
- Elimina el archivo ZIP después de la extracción

### 7. **Verificar la Estructura de Archivos**
Después de la extracción, deberías tener esta estructura en `public_html`:
```
public_html/
├── index.html
├── favicon.ico
├── favicon.svg
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
├── asset-manifest.json
├── product/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   └── 6.jpg
└── static/
    ├── css/
    │   ├── main.d92a0cd6.css
    │   └── main.d92a0cd6.css.map
    ├── js/
    │   ├── main.7f65a2ac.js
    │   ├── main.7f65a2ac.js.map
    │   ├── 787.d1312ffc.chunk.js
    │   └── 787.d1312ffc.chunk.js.map
    └── media/
        └── [archivos de medios]
```

### 8. **Configurar .htaccess para React Router**
Crea un archivo `.htaccess` en `public_html` con el siguiente contenido:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Configuración de seguridad
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Compresión GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache para archivos estáticos
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 9. **Verificar el Deploy**
- Visita tu dominio en el navegador
- Verifica que el sitio cargue correctamente
- Prueba la navegación entre páginas
- Verifica que las imágenes y recursos se carguen

### 10. **Configuración de Dominio (Si es necesario)**
- Si usas un subdominio, asegúrate de que esté configurado correctamente
- Verifica la configuración DNS si es un dominio personalizado

## ✅ Verificaciones Post-Deploy

### Funcionalidades a Verificar:
- ✅ **Página de inicio** carga correctamente
- ✅ **Menú de navegación** funciona
- ✅ **Página "¿Quién soy?"** con ortografía corregida
- ✅ **Página de Propuestas** con colores actualizados
- ✅ **Imágenes y videos** se cargan correctamente
- ✅ **Responsive design** funciona en móviles
- ✅ **Formularios** (si los hay) funcionan correctamente

### Rendimiento:
- **Bundle JS principal:** 344.31 kB (comprimido)
- **CSS principal:** 72.01 kB (comprimido)
- **Optimizado** para carga rápida

## 🔧 Solución de Problemas Comunes

### Si el sitio no carga:
1. Verifica que `index.html` esté en la raíz de `public_html`
2. Revisa los permisos de archivos (644 para archivos, 755 para carpetas)
3. Verifica la configuración del `.htaccess`

### Si las rutas no funcionan:
1. Asegúrate de que el archivo `.htaccess` esté configurado correctamente
2. Verifica que mod_rewrite esté habilitado en el servidor

### Si los recursos no cargan:
1. Verifica que la carpeta `static` esté en la ubicación correcta
2. Revisa los permisos de las carpetas de medios

## 📞 Soporte
Si encuentras problemas durante el deploy, contacta al soporte técnico de Hostinger con los detalles específicos del error.

---
**Deploy preparado el:** $(date)  
**Versión del sitio:** Rosinaldo Villegas - Campaña Electoral  
**Tamaño total:** 63MB  
**Archivos incluidos:** HTML, CSS, JS, imágenes, videos, fuentes