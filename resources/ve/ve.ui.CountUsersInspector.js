ve.ui.CountUsersInspector = function VeUiCountUsersInspector( config ) {
	// Parent constructor
	ve.ui.CountUsersInspector.super.call( this, ve.extendObject( {padded: false}, config ) );
};

/* Inheritance */
OO.inheritClass( ve.ui.CountUsersInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ve.ui.CountUsersInspector.static.name = 'countUsersInspector';

ve.ui.CountUsersInspector.static.title = OO.ui.deferMsg( 'bs-countthings-ve-countusers-title' );

ve.ui.CountUsersInspector.static.modelClasses = [ ve.dm.CountUsersNode ];

//This tag does not have any content
ve.ui.CountUsersInspector.static.allowedEmpty = true;
ve.ui.CountUsersInspector.static.selfCloseEmptyBody = true;
/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CountUsersInspector.prototype.initialize = function () {
	// Parent method
	ve.ui.CountUsersInspector.super.prototype.initialize.call( this );

	this.input.$element.remove();

	// Initialization
	this.$content.addClass( 've-ui-countusers-inspector-content' );	

	this.indexLayout = new OO.ui.PanelLayout( {
		scrollable: false,
		expanded: false,
		padded: false
	} );

	this.indexLayout.$element.append(
		this.generatedContentsError.$element
	);

	this.form.$element.append(
		this.indexLayout.$element
	);
};


ve.ui.CountUsersInspector.prototype.getSetupProcess = function ( data ) {
	console.log(data);
	return ve.ui.CountUsersInspector.super.prototype.getSetupProcess.call( this, data ).next( function () {
			this.on( 'click', this.onChangeHandler );
			//Get this out of here
			this.actions.setAbilities( { done: true } );
		}, this );
};

ve.ui.CountUsersInspector.prototype.wireEvents = function () {
};

ve.ui.CountUsersInspector.prototype.updateMwData = function ( mwData ) {
	// Parent method
	ve.ui.CountUsersInspector.super.prototype.updateMwData.call( this, mwData );
};

/**
 * @inheritdoc
 */
ve.ui.CountUsersInspector.prototype.formatGeneratedContentsError = function ( $element ) {
	return $element.text().trim();
};

/**
 * Append the error to the current tab panel.
 */
ve.ui.CountUsersInspector.prototype.onTabPanelSet = function () {
	this.indexLayout.getCurrentTabPanel().$element.append( this.generatedContentsError.$element );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CountUsersInspector );
