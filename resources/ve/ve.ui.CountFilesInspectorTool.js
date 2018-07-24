ve.ui.CountFilesInspectorTool = function VeUiCountFilesInspectorTool( toolGroup, config ) {
	ve.ui.CountFilesInspectorTool.super.call( this, toolGroup, config );
};
OO.inheritClass( ve.ui.CountFilesInspectorTool, ve.ui.FragmentInspectorTool );

ve.ui.CountFilesInspectorTool.static.name = 'countFilesTool';
ve.ui.CountFilesInspectorTool.static.group = 'object';
ve.ui.CountFilesInspectorTool.static.icon = 'countFiles'; //To be added
ve.ui.CountFilesInspectorTool.static.title = OO.ui.deferMsg(
	'bs-countthings-ve-countfiles-title'
);
ve.ui.CountFilesInspectorTool.static.modelClasses = [ ve.dm.CountFilesNode ];
ve.ui.CountFilesInspectorTool.static.commandName = 'countFilesCommand';
ve.ui.toolFactory.register( ve.ui.CountFilesInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'countFilesCommand', 'window', 'open',
		{ args: [ 'countFilesInspector' ] }
	)
);

