# P5 Simple MEAN Payment Gateway

Un proyecto backend simple y escalable que integra **Stripe** como pasarela de pagos, siguiendo una arquitectura limpia con Node.js.

## Características
- Creación de `PaymentIntents` con Stripe.
- Configuración modular y escalable.
- Fácil de extender para futuras integraciones como PayPal o CyberSource.

## Requisitos
- Node.js
- Claves de API de Stripe (sandbox)

## Configuración
1. Clonar el repositorio:
   ```bash
   git clone <REPO_URL>
   cd p5-simple-mean-payment-gateway


* Endpoints Necesarios
GET /products: Lista los productos disponibles.
POST /cart: Recibe los productos seleccionados por el usuario (simularemos un carrito básico).
POST /create-payment-intent: Crea un PaymentIntent en Stripe con el monto total.
POST /confirm-payment: Confirma el pago en el frontend (si es necesario).
POST /webhook: Endpoint para manejar notificaciones de eventos de Stripe (opcional).