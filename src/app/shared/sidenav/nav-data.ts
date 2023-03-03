export const navbarData = [
    {
        routeLink: 'inicio',
        icon: 'fal fa-home',
        label: 'Inicio'
    },
    {
        routeLink: 'clientes',
        icon: 'fal fa-solid fa-users',
        label: 'Clientes',
        children: [
            {
                routeLink: 'clientes/nuevo',
                label: 'Nuevo cliente'
            },
            {
                routeLink: 'clientes/buscar',
                label: 'Buscar cliente'
            }
        ]
    },
    {
        routeLink: 'conceptos',
        icon: 'fal fa-solid fa-comment-dollar',
        label: 'Conceptos'
    },
    {
        routeLink: 'tipo_pago',
        icon: 'fal fa-solid fa-coins',
        label: 'Tipos de pagos'
    },
];
