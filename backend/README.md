# P5 Simple MEAN Payment Gateway

Un proyecto backend simple y escalable que integra **Stripe** como pasarela de pagos, siguiendo una arquitectura limpia con Node.js.

## Características
- Creación de `PaymentIntents` con Stripe.
- Configuración modular y escalable.
- Fácil de extender para futuras integraciones como PayPal o CyberSource.

## Requisitos
- Node.js
- Claves de API de Stripe (sandbox)

## Estructura del Backend
La estructura del backend debe estar clara y modular para facilitar el mantenimiento y la integración:
backend
├── src
│   ├── modules
│   │   ├── products
│   │   │   ├── controllers
│   │   │   │   └── product.controller.js
│   │   │   ├── routes
│   │   │   │   └── product.routes.js
│   │   │   └── services
│   │   │       └── product.service.js
│   │   ├── payments
│   │   │   ├── controllers
│   │   │   │   ├── checkout.controller.js
│   │   │   │   └── cart.controller.js
│   │   │   ├── routes
│   │   │   │   ├── checkout.routes.js
│   │   │   │   └── cart.routes.js
│   │   │   └── services
│   │   │       └── stripe.service.js
│   ├── shared
│   │   └── config.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md


## Datos de tarjeta para prueba de stripe
Datos de Prueba para Pagar en Stripe Checkout
1. Tarjetas de Prueba
Stripe tiene tarjetas predefinidas para diferentes escenarios. Aquí están las más comunes:

* Pago exitoso (tarjeta básica):
Número de tarjeta: 4242 4242 4242 4242
Expiración: Cualquier fecha válida (por ejemplo, 12/34)
CVC: Cualquier número de 3 dígitos (por ejemplo, 123)

* Autenticación 3D Secure requerida: (Simula un flujo donde el cliente debe autenticarse adicionalmente).
Número de tarjeta: 4000 0027 6000 3184
Expiración: Cualquier fecha válida
CVC: Cualquier número de 3 dígitos

* Pago rechazado (tarjeta con fondos insuficientes):
Número de tarjeta: 4000 0000 0000 9995
Expiración: Cualquier fecha válida
CVC: Cualquier número de 3 dígitos

* Pago fallido por autenticación requerida pero no completada:
Número de tarjeta: 4000 0000 0000 3063
Expiración: Cualquier fecha válida
CVC: Cualquier número de 3 dígitos




## Configuración
1. Clonar el repositorio:
   ```bash
   git clone <REPO_URL>
   cd p5-simple-mean-payment-gateway


* Endpoints Necesarios
GET /products: Lista los productos disponibles.
### POST /cart: Recibe los productos seleccionados por el usuario (simularemos un carrito básico).
Prueba con Postman:

Endpoint: POST /api/cart
Body (JSON):
json
Copiar
Editar
{
  "items": [
    { "id": 1, "quantity": 2 },
    { "id": 2, "quantity": 1 }
  ]
}
Respuesta esperada:
json
Copiar
Editar
{
  "clientSecret": "pi_xxxxxxxxxxxxx_secret_xxxxxxxxxxxxx",
  "message": "PaymentIntent creado con éxito"
}


### POST /create-payment-intent: Crea un PaymentIntent en Stripe con el monto total.
### POST /confirm-payment: Confirma el pago en el frontend (si es necesario).
### POST /webhook: Endpoint para manejar notificaciones de eventos de Stripe (opcional).


* Elementos de Stripe
- esto es para usar componentes de stripe pero personalizar formulario de cobro del carrito

* Stripe Checkout
- esto es para realizar el pago en una url de stripe por sesion para realizar el pago 

¿Qué Opción Debo Usar?
Stripe Checkout: Si quieres una solución rápida y sencilla. Stripe gestiona toda la interfaz y experiencia del cliente.
Elementos de Stripe con PaymentIntent: Si necesitas personalizar completamente la experiencia de pago y no quieres redirigir al cliente fuera de tu aplicación.