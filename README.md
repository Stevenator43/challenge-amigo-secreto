
# Instructivo: Funcionalidades del Código

Este código JavaScript implementa un sistema básico para gestionar una lista de nombres y sortear un "amigo secreto". A continuación, se explican las funcionalidades del código, paso a paso:

---

## **1. Variables principales**
- `let listaNombres = [];`  
  Es un array que almacena los nombres de los amigos que se agregan al sistema.

- `let elemento = document.querySelector('#listaAmigos');`  
  Selecciona el elemento HTML con el identificador `listaAmigos`, donde se mostrará la lista de nombres ingresados.

---

## **2. Función `agregarAmigo()`**
Esta función agrega un nombre a la lista de amigos, validándolo y formateándolo correctamente.

### **Pasos dentro de la función:**
1. **Obtiene el nombre del input HTML:**  
   ```javascript
   let nombreAmigo = document.getElementById('amigo').value;
   ```
   Recupera el valor ingresado en el campo de texto con el id `amigo`.

2. **Validación del nombre:**  
   ```javascript
   if (nombreAmigo == '') {
       return alert('Porfavor Ingrese un nombre valido');
   }
   ```
   Si el campo está vacío, muestra una alerta indicando que se debe ingresar un nombre válido y detiene la ejecución de la función.

3. **Formatea el nombre ingresado:**  
   ```javascript
   let nombreCap = nombreAmigo[0].toUpperCase() + nombreAmigo.slice(1).toLowerCase();
   ```
   - Convierte la primera letra del nombre a mayúscula.
   - Convierte las letras restantes a minúsculas.

4. **Agrega el nombre a la lista y lo muestra:**  
   ```javascript
   listaNombres.push(nombreCap);
   elemento.innerText += `${nombreCap}\n`;
   ```
   - Añade el nombre formateado al array `listaNombres`.
   - Lo agrega al contenido del elemento HTML `#listaAmigos`.

5. **Limpia el campo de texto:**  
   ```javascript
   limpiarTexto();
   ```
   Llama a la función `limpiarTexto()` para borrar el contenido del campo de entrada.

---

## **3. Función `limpiarTexto()`**
Se encarga de limpiar el campo de entrada después de agregar un nombre.

```javascript
function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}
```
Busca el input con el id `amigo` y le asigna un valor vacío (`''`).

---

## **4. Función `sortearAmigo()`**
Selecciona un nombre al azar de la lista y muestra el resultado.

### **Pasos dentro de la función:**
1. **Selecciona el área de resultado y limpia la lista de nombres en pantalla:**  
   ```javascript
   let resultado = document.getElementById('resultado');
   elemento.innerHTML = '';
   ```
   - Obtiene el elemento HTML con id `resultado` para mostrar quién es el "amigo secreto".
   - Limpia el contenido de la lista de amigos en pantalla (`#listaAmigos`).

2. **Genera un índice aleatorio:**  
   ```javascript
   let numeroAleatorio = Math.floor(Math.random() * listaNombres.length);
   ```
   Usa `Math.random()` para generar un número aleatorio entre 0 y el tamaño del array `listaNombres`, redondeándolo hacia abajo con `Math.floor()`.

3. **Muestra el amigo secreto:**  
   ```javascript
   return resultado.innerHTML = `Tu amigo secreto sera: ${listaNombres[numeroAleatorio]}`;
   ```
   Toma el nombre del array `listaNombres` correspondiente al índice aleatorio y lo muestra en el elemento `#resultado`.

---

## **Estructura esperada en HTML**
Para que este código funcione correctamente, el archivo HTML debe contener los siguientes elementos:
- Un campo de entrada para el nombre (`#amigo`).
- Un botón para agregar un nombre que llame a `agregarAmigo()`.
- Un área para mostrar la lista de nombres (`#listaAmigos`).
- Un botón para sortear que llame a `sortearAmigo()`.
- Un área para mostrar el resultado del sorteo (`#resultado`).

### Ejemplo:
```html
<input type="text" id="amigo" placeholder="Ingresa un nombre">
<button onclick="agregarAmigo()">Agregar</button>
<div id="listaAmigos"></div>
<button onclick="sortearAmigo()">Sortear Amigo</button>
<div id="resultado"></div>
```

---

## **Resumen de funcionalidades**
- **Agregar amigo:** Valida y agrega nombres a una lista, mostrándolos en pantalla.
- **Limpiar campo:** Elimina el texto del input una vez procesado.
- **Sortear amigo:** Selecciona un nombre aleatorio de la lista y muestra el resultado en pantalla.
