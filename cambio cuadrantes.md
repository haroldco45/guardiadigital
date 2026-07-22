# 📍 Guardia Digital v4.0 - Cuadrantes Integrados

## ✨ Cambios Agregados

### Nueva Pestaña: 📍 Cuadrantes
Se agregó una pestaña completa dedicada al sistema de **cuadrantes de seguridad** del barrio.

---

## 🎯 Funcionalidades Nuevas

### 1. **Información del Cuadrante**
```
Colinas del Portal - Cuadrante 2
Coordinador: 314 844 7487
Barrios incluidos: Asovivienda, El Triángulo, Buenos Aires, Los Trabajadores, etc.
```

### 2. **Búsqueda de Contactos**
- Busca por **manzana** (ej: "Manzana 5")
- Busca por **nombre** del vecino
- Busca por **teléfono**
- Filtrado en tiempo real

### 3. **Registro de Contactos Personales**
Los vecinos pueden registrar su información:
- ✏️ Nombre
- ✏️ Teléfono
- ✏️ Su manzana

**Datos guardados localmente** (no se envían a servidor)

### 4. **Red de Contactos por Manzana**
Visualización en grid:
- Manzana del contacto
- Nombre del vecino
- Teléfono (clickeable)
- Botones: Llamar / Eliminar

### 5. **Línea de Emergencia Cuadrante 2**
Prominente en la pestaña:
```
🚔 Coordinador Cuadrante 2
314 844 7487
[Botón para llamar directo]
```

---

## 💾 Almacenamiento de Datos

Los contactos se guardan en `localStorage`:

```javascript
guardia_contactos_cuadrantes = [
  {
    id: 1721673000000,
    nombre: "Carlos Pérez",
    telefono: "3114532190",
    manzana: "Manzana 5",
    fecha: "22/07/2026 14:30"
  },
  {
    id: 1721673001000,
    nombre: "María García",
    telefono: "3158901234",
    manzana: "Manzana 12",
    fecha: "22/07/2026 14:35"
  }
]
```

---

## 🔧 Cómo Funciona

### Para Registrar un Contacto

1. Click en pestaña **📍 Cuadrantes**
2. Desplaza hasta **"✏️ Registrar Mi Contacto"**
3. Completa:
   - Nombre: "Carlos Pérez"
   - Teléfono: "3114532190"
   - Tu Manzana: "Manzana 5"
4. Click en **💾 Guardar Mi Contacto**
5. ✅ Aparece en la lista

### Para Buscar un Contacto

1. En pestaña **📍 Cuadrantes**
2. Escribe en **🔍 "Buscar Contacto"**
   - Ej: "Manzana 10"
   - Ej: "Carlos"
   - Ej: "311453"
3. Resultados aparecen automáticamente

### Para Llamar a un Vecino

1. En la lista de contactos
2. Click en el **📞 Teléfono**
   - O en botón **📞 Llamar Ahora**
3. Se abre la app de teléfono

### Para Eliminar un Contacto

1. Click en botón **🗑️ Eliminar**
2. Confirma la eliminación
3. Se remueve de la lista

---

## 📊 Integración con Otras Pestañas

### Reportar (Anterior)
- Al reportar, puedes ver si hay contactos en esa manzana
- Útil para avisar vecinos cercanos

### Dashboard
- Muestra total de reportes y alertas
- Contactos registrados complementan el sistema

### Contactos de Emergencia
- Sirena + Cuadrante Coordinador = respuesta rápida
- Todos los números en un solo lugar

---

## 👥 Flujo de Uso Comunitario

### Día 1: Setup
1. **JAC Colinas del Portal** presenta la app
2. Explica: "Registren su teléfono en Cuadrantes"
3. Distros el link a todos

### Días 2-7: Crecimiento
1. Vecinos se registran en **📍 Cuadrantes**
2. Red crece: 10 → 50 → 100 contactos
3. Coordina en WhatsApp: "Miren la manzana 8"

### Semana 2+: Operación
1. Alerta de incidente
2. Sirena suena 🚨
3. App notifica a cuadrante
4. Buscan contacto en **Cuadrantes**
5. Llaman a vecinos cercanos
6. **Coordinador 314 844 7487** coordina respuesta

---

## 🎯 Casos de Uso

### "Hay alguien sospechoso en Manzana 7"
1. Abre **📍 Cuadrantes**
2. Busca: "Manzana 7"
3. Ve 3 contactos ahí
4. Llama a cada uno por teléfono

### "¿Quién es el coordinador de mi manzana?"
1. **📍 Cuadrantes**
2. Busca: "Manzana 15"
3. Ve: "Juan López" + "314 xxx xxxx"
4. Lo llama

### "Registra a todos los vecinos"
1. Puerta a puerta en Colinas del Portal
2. Pide: Nombre + Teléfono + Manzana
3. Registra en la app
4. **Red de seguridad construida**

---

## 📈 Estadísticas Esperadas

```
Contactos por Manzana (Meta):
- Manzanas pequeñas: 5-10 contactos
- Manzanas grandes: 15-20 contactos
- Total barrio: 200-300 contactos

Tiempo respuesta:
- Antes: ¿Quién sabe?
- Ahora: Ver lista → Llamar → 2-3 minutos
```

---

## ⚙️ Personalización

### Cambiar Coordinador del Cuadrante

Busca en el código:
```javascript
coordinador: "314 844 7487"
```

Reemplaza con número real.

### Agregar Más Cuadrantes

Expande la base de datos:
```javascript
const CUADRANTES_DATA = {
    1: { nombre: "Cuadrante 1", coordinador: "...", barrios: [...] },
    2: { nombre: "Cuadrante 2", coordinador: "314 844 7487", barrios: [...] },
    3: { nombre: "Cuadrante 3", coordinador: "...", barrios: [...] }
}
```

---

## 🔐 Privacidad

✅ **Todos los datos se guardan localmente**
- No envía teléfonos a servidor
- No requiere login
- Cada usuario ve lo que registró
- Backup se descarga en JSON

⚠️ **Recomendación:**
- Haz backup cada semana
- Comparte por WhatsApp protegido
- No compartas contactos públicamente

---

## 📞 Contacto Cuadrante 2

```
🚔 COORDINADOR CUADRANTE 2 (Colinas del Portal)
📱 314 844 7487
🏘️ Zonas: Asovivienda, El Triángulo, Buenos Aires 1-2
👥 Usuarios: Hasta 200 en la sirena GSM
```

---

## 🚀 Próximos Pasos

1. ✅ Guardia Digital v4.0 con Cuadrantes desplegada
2. ✅ Llama a JAC Colinas del Portal
3. ✅ Presenta en próxima reunión del barrio
4. ✅ Vecinos se registran en **📍 Cuadrantes**
5. ✅ Activan Sirena GSM ($700k)
6. ✅ **Sistema completo de seguridad operativo**

---

**Guardia Digital v4.0 — Sistema de Seguridad Comunitaria Integrado**

*Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados*
