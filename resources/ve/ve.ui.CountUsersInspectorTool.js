ve.ui.CountUsersInspectorTool = function VeUiCountUsersInspectorTool( toolGroup, config ) {
	ve.ui.CountUsersInspectorTool.super.call( this, toolGroup, config );
};
OO.inheritClass( ve.ui.CountUsersInspectorTool, ve.ui.FragmentInspectorTool );

ve.ui.CountUsersInspectorTool.static.name = 'countUsersTool';
ve.ui.CountUsersInspectorTool.static.group = 'object';
ve.ui.CountUsersInspectorTool.static.icon = 'countUsers'; //To be added
ve.ui.CountUsersInspectorTool.static.title = OO.ui.deferMsg(
	'bs-countthings-ve-countusers-title'
);
ve.ui.CountUsersInspectorTool.static.modelClasses = [ ve.dm.CountUsersNode ];
ve.ui.CountUsersInspectorTool.static.commandName = 'countUsersCommand';
ve.ui.toolFactory.register( ve.ui.CountUsersInspectorTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'countUsersCommand', 'window', 'open',
		{ args: [ 'countUsersInspector' ] }
	)
);

