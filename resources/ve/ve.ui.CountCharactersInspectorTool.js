ve.ui.CountCharactersInspectorTool = function VeUiCountCharactersInspectorTool( toolGroup, config ) {
	ve.ui.CountCharactersInspectorTool.super.call( this, toolGroup, config );
};
OO.inheritClass( ve.ui.CountCharactersInspectorTool, ve.ui.FragmentInspectorTool );

ve.ui.CountCharactersInspectorTool.static.name = 'countCharactersTool';
ve.ui.CountCharactersInspectorTool.static.group = 'object';
ve.ui.CountCharactersInspectorTool.static.icon = 'countCharacters'; //To be added
ve.ui.CountCharactersInspectorTool.static.title = OO.ui.deferMsg(
	'bs-countthings-ve-countcharacters-title'
);
ve.ui.CountCharactersInspectorTool.static.modelClasses = [ ve.dm.CountCharactersNode ];
ve.ui.CountCharactersInspectorTool.static.commandName = 'countCharactersCommand';
ve.ui.toolFactory.register( ve.ui.CountCharactersInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'countCharactersCommand', 'window', 'open',
		{ args: [ 'countCharactersInspector' ], supportedSelections: [ 'linear' ] }
	)
);

