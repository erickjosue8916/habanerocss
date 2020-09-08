# Utilizacion de rejillas
### Basado en filas y columnas
El posicionamiento estara formado por filas y 12 columnas, las cuales se les han sido asignados distintos tamaños, adecuado a un ancho de pantalla del 100%
## Row
En el caso de las filas, se le asignan directamente el 100% del ancho de la pantalla

## Col
A cada una de las 12 columnas se le asigna un **width** diferente, teniendo en cuenta que, existen clases para diferentes anchuras de pantalla. Pero las medidas son las mismas para todas, el usuario sabra como adecuarlas a su preferencias

### Anchuras de pantalla
 
    -Desktop: lg-[1-12] Este tipo de clase se utiliza en un ancho de pantalla de un minimo de 1024px

    -Tablet: md-[1-12] Este tipo de clase se utiliza en un ancho de pantalla de maximo 1024px y un minimo de 768px

    -Movil: sm-[1-12] Este tipo de clase se utiliza en un ancho de pantalla de un minimo de 576px

**Nota:** a cada clase se le debe asignar la clase predominante **col**, ejemplo: **col lg-[ 1-12 ]**

### ¿Que significa un maximo y un minimo?
Esto significa que hasta los valores que se la hayan dado ahi sera la ruptura y se aplicara el siguiente cambio que el usuario haya agregado.


    

 Clase            | Medida         | 
-------------------|---------------|
 **[ lg,md,sm ]-1**          |    8.33%       
 **[ lg,md,sm ]-2**          |    16.66%      
 **[ lg,md,sm ]-3**          |    24.99% 
 **[ lg,md,sm ]-4**          |    33.32% 
 **[ lg,md,sm ]-5**          |    41.65% 
 **[ lg,md,sm ]-6**          |    49.98% 
 **[ lg,md,sm ]-7**          |    58.31% 
 **[ lg,md,sm ]-8**          |    66.64% 
 **[ lg,md,sm ]-9**          |    74.97% 
 **[ lg,md,sm ]-10**          |    83.30% 
 **[ lg,md,sm ]-11**          |    91.63% 
 **[ lg,md,sm ]-12**          |    99.96% 


    

