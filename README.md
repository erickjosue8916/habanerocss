# habanerocss
Framework CSS 

# Integrantes
- Keny Lisbeth Chavez Torres - CT18009
- Gema Emperatriz Manzano Machuca - MM18024
- Edgar Antonio Reyes Ceron - RC18050
- Carlos Enrique Cordero Linares - CL18030
- Erick Josue Saravia Aragon - SA18004

# Elementos
 MODULO            | CLASE         | DESCRIPCION                    | ESTADO 
-------------------|---------------|--------------                  |----------------
**rejilla**        |               | sistema de rejillas adaptable  | 90%
---                | .row          | nueva fila            
--- | .col | crea una nueva columna 
--- | xs-[1-12] | modificador de tamaño solo para pantallas pequeñas 
--- | md-[1-12] | modificador de tamaño solo para pantallas medianas  
--- | lg-[1-12] | modificador de tamaño solo para pantallas grandes  
**modificadores** | | modificadores de estilos basicos | 90%
--- | bg-primary | color de fondo primario
--- | bg-secondary | color de fondo secondary
--- | bg-info | color de fondo info
--- | bg-danger | color de fondo danger
--- | bg-warning | color de fondo warning
--- | bg-success | color de fondo success



## Como trabajar actualizaciones
1. Siempre se debe tener una rama personal en la cual trabajar
```bash
# Crear una rama y cambiar a esta
git checkout -b nombreRama

# Si ya tienes creada la rama solo ejecuta
git checkout nombreRama
```

2. Trabaja tus actualizaciones en las carpetas de ejemplo para el componente que estas trabajando
```yaml
# jerarquia de carpetas
...
examples:
    - ...
    - yourComponent
        - index.html # html para probar tus css
        - style.css # css de apoyo (que no forma parte del framework)
        - component.css # estilos a agregar al framework ej. fuentes.css, colors.css
```
3. Actualiza tus cambios locales con los cambios aprobados de los demas
```bash
# Esto traera los ultimos cambios subidos
git pull origin develop 

# De haber, seguido la metodologuia no deberia generar conflictos ya que has editado en archivos donde nadie mas lo a hecho
```

4. Agrega tus cambios a los estilos principales del framework

```css
/* habaneritocss/css/style.css */

/* Agrega un comentario donde iran tus modificaciones */
/* start my component styles */
...
myStyles 
...
/* end my component styles */
```

5. Guarda tu cambios y actualiza la version remota
```bash
git add .
git commit -m "mensaje que describa tus cambios"
git push origin tuRama
```

6. Solicita un merge a tus cambios
    * En github habre la opcion de pull request y selecciona: **develop <- turama**
    * Escribe una descripcion a tus cambios y envialo
    * Espera aprobacion de tus cambios

> **NOTA:** de haber seguidos los pasos tus cambios seran aceptados, en caso de conflicto se te notificara para que corrijas

> Has cambios peoridicos con las cosas nuevas que vayas agregando, siempre comenzando desde el paso 1