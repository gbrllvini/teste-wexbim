document.addEventListener('DOMContentLoaded', function () {
    async function initializeViewer() {
        // inicializa viewer
        var viewer = new Viewer('viewer');
        viewer.on('loaded', function () {
            viewer.show(ViewType.DEFAULT);
        });
        // carrega o modelo e starta o viewer
        await viewer.load('./data/SampleHouse.wexbim');
        viewer.start();
    }
    // chama função de inicialização
    initializeViewer();
});