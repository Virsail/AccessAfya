import React from 'react'




const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))



const Buttons = React.lazy(() => import('./views/components/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./views/components/buttons/dropdowns/Dropdowns'))
const Widgets = React.lazy(() => import('./views/components/widgets/Widgets'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const CoreUIIcons = React.lazy(() => import('./views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/components/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/components/icons/brands/Brands'))

const Accordion = React.lazy(() => import('./views/components/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/components/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/components/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/components/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/components/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/components/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/components/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/components/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/components/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/components/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/components/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/components/base/tooltips/Tooltips'))
const Alerts = React.lazy(() => import('./views/components/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/components/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/components/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/components/notifications/toasts/Toasts'))


const routes = [
    
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/widgets', name: 'Widgets', component: Widgets },

]

export default routes