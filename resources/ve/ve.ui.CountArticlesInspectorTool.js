ve.ui.CountArticlesInspectorTool = function VeUiCountArticlesInspectorTool( toolGroup, config ) {
	ve.ui.CountArticlesInspectorTool.super.call( this, toolGroup, config );
};
OO.inheritClass( ve.ui.CountArticlesInspectorTool, ve.ui.FragmentInspectorTool );

ve.ui.CountArticlesInspectorTool.static.name = 'countArticlesTool';
ve.ui.CountArticlesInspectorTool.static.group = 'object';
ve.ui.CountArticlesInspectorTool.static.icon = 'countArticles'; //To be added
ve.ui.CountArticlesInspectorTool.static.title = OO.ui.deferMsg(
	'bs-countthings-ve-countarticles-title'
);
ve.ui.CountArticlesInspectorTool.static.modelClasses = [ ve.dm.CountArticlesNode ];
ve.ui.CountArticlesInspectorTool.static.commandName = 'countArticlesCommand';
ve.ui.toolFactory.register( ve.ui.CountArticlesInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'countArticlesCommand', 'window', 'open',
		{ args: [ 'countArticlesInspector' ] }
	)
);

