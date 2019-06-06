import { Application } from 'src/core/shopware';
import './component';
import './config';
import './preview';

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'youtube',
    label: 'YouTube Video',
    component: 'sw-cms-el-youtube',
    configComponent: 'sw-cms-el-config-youtube',
    previewComponent: 'sw-cms-el-preview-youtube',
    defaultConfig: {
        videoSrc: {
            source: 'static',
            value: 'Y4mGIZZL8jA'
        },
        showControls: {
            source: 'static',
            value: true
        }
    }
});