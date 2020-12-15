import routers from '@/config/router.config'

export default function createRouter() {
    return generateRoutes(routers)
}

function generateRoutes(routers) {
    let menu = []
    routers.forEach(item => {
        if (!item.meta.hidden) {
            let list = {
                key: item.name,
                title: item.meta.title,
                icon: item.meta.icon || 'menu'
            }
            if (item.children) {
                let children = generateRoutes(item.children)
                if (children.length) {
                    list.children = children
                }
            }
            menu.push(list);
        }
    })
    return menu
}
