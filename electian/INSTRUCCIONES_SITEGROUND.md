# 🚀 Instrucciones para Deploy en SiteGround

## 📦 Archivo de Deploy Preparado

**Archivo:** `rosinaldovillegas-siteground-deploy.zip` (63MB)
**Ubicación:** `/Users/marcelogonzalez/Scripts_Python/rosinaldovillegas.com/electian/`

## 📋 Pasos para subir a SiteGround

### 1. Acceder al Panel de Control
- Inicia sesión en tu cuenta de SiteGround
- Ve al **Site Tools** de tu dominio

### 2. Acceder al Administrador de Archivos
- En Site Tools, busca la sección **FILES**
- Haz clic en **File Manager**

### 3. Navegar al Directorio Correcto
- Ve al directorio `public_html` (este es el directorio raíz de tu sitio web)
- Si tienes un subdominio, navega a la carpeta correspondiente

### 4. Limpiar el Directorio (Opcional pero Recomendado)
- Si hay archivos previos, elimínalos para evitar conflictos
- **IMPORTANTE:** Haz un backup antes de eliminar archivos existentes

### 5. Subir el Archivo ZIP
- Haz clic en **Upload** en el File Manager
- Selecciona el archivo `rosinaldovillegas-siteground-deploy.zip`
- Espera a que se complete la subida

### 6. Extraer el Archivo
- Una vez subido, haz clic derecho sobre el archivo ZIP
- Selecciona **Extract**
- Los archivos se extraerán en el directorio actual

### 7. Eliminar el Archivo ZIP
- Después de extraer, puedes eliminar el archivo ZIP para ahorrar espacio
- Haz clic derecho sobre el ZIP y selecciona **Delete**

### 8. Verificar la Estructura
Asegúrate de que en `public_html` tengas:
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
    ├── js/
    └── media/
```

## 🌐 Verificación Final

1. **Visita tu dominio** en el navegador
2. **Verifica que todas las páginas funcionen:**
   - Página de inicio
   - ¿Quién soy?
   - Propuestas
   - Todas las secciones y enlaces

## 🔧 Configuraciones Adicionales (Si es necesario)

### Configurar .htaccess para React Router
Si usas rutas de React y tienes problemas con URLs directas, crea un archivo `.htaccess` en `public_html`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Configurar HTTPS
- En Site Tools, ve a **Security > SSL Manager**
- Activa **Force HTTPS Redirect**

## 📞 Soporte

Si encuentras problemas:
1. Verifica que todos los archivos se hayan subido correctamente
2. Revisa los logs de error en Site Tools > Statistics > Error Logs
3. Contacta al soporte de SiteGround si es necesario

## ✅ Checklist Final

- [ ] Archivo ZIP subido a SiteGround
- [ ] Archivos extraídos en public_html
- [ ] Archivo ZIP eliminado
- [ ] Sitio web accesible desde el dominio
- [ ] Todas las páginas funcionan correctamente
- [ ] Imágenes y recursos se cargan correctamente
- [ ] Formularios funcionan (si los hay)
- [ ] Versión móvil funciona correctamente

---

**¡Tu sitio web de Rosinaldo Villegas está listo para producción!** 🎉