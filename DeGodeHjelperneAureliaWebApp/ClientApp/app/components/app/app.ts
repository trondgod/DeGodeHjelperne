import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    public currentDate: string = new Date().toLocaleDateString('nb-NO');
    router: Router | undefined;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'De gode hjelperne';
        config.map([
            {
                route: ['', 'today'],
                name: 'today',
                settings: { icon: 'time' },
                moduleId: PLATFORM.moduleName('../today/today'),
                nav: true,
                title: 'Dagen til Aurelia'
            },
            {
                route: 'weekplan',
                name: 'weekplan',
                settings: { icon: 'calendar' },
                moduleId: PLATFORM.moduleName('../weekplan/weekplan'),
                nav: true,
                title: 'Ukeplanen'
            }, {
                route: 'fetch-data',
                name: 'fetchdata',
                settings: { icon: '' },
                moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
                nav: true,
                title: 'Hjelperne'
            },
            {
                route: 'client',
                name: 'client',
                settings: { icon: 'user' },
                moduleId: PLATFORM.moduleName('../client/client'),
                nav: true,
                title: 'Aurelia'
            },
            {
                route: 'communication',
                name: 'communication',
                settings: { icon: 'phone' },
                moduleId: PLATFORM.moduleName('../communication/communication'),
                nav: true,
                title: 'Ta direkte kontakt'
            },
            {
                route: 'location',
                name: 'location',
                settings: { icon: 'globe' },
                moduleId: PLATFORM.moduleName('../location/location'),
                nav: true,
                title: 'Befinner seg her'
            },
            {
                route: 'about',
                name: 'about',
                settings: { icon: 'info-sign' },
                moduleId: PLATFORM.moduleName('../about/about'),
                nav: true,
                title: 'Om appen'
            },
            {
                route: 'settings',
                name: 'settings',
                settings: { icon: 'cog' },
                moduleId: PLATFORM.moduleName('../settings/settings'),
                nav: true,
                title: 'Innstillinger'
            }
        ]);

        this.router = router;
    }
}
