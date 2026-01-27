# Refactorización de Componentes del Menú

## Tareas Pendientes
- [ ] Eliminar Menu.tsx (no se usa en el proyecto)
- [ ] Refactorizar MenuGrid.tsx: Simplificar lógica de secciones, eliminar código innecesario
- [ ] Refactorizar PizzaCard.tsx: Limpiar código no utilizado, asegurar simplicidad

## Información Recopilada
- Menu.tsx no se importa en ningún lugar; solo MenuGrid.tsx se usa en app/page.tsx.
- MenuGrid.tsx maneja pizzas en secciones (Gourmet, Extraordinarias, Clásicas) con lógica compleja que puede simplificarse.
- PizzaCard.tsx es relativamente limpio, pero verificar estado y modal innecesarios.
- No se encontró lógica de conversión monetaria; precios están en USD directo.

## Plan de Edición
- Eliminar Menu.tsx completamente.
- En MenuGrid.tsx: Agrupar pizzas por sección usando un objeto, simplificar renderizado.
- En PizzaCard.tsx: Mantener funcionalidad esencial, eliminar cualquier código muerto.

## Archivos Dependientes
- app/page.tsx (usa MenuGrid.tsx)
- components/MenuGrid.tsx
- components/PizzaCard.tsx

## Pasos de Seguimiento
- Verificar que el proyecto compile después de cambios.
- Probar funcionalidad del menú.
