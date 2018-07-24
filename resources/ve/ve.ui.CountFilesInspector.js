ve.ui.CountFilesInspector = function VeUiCountFilesInspector( config ) {
	// Parent constructor
	ve.ui.CountFilesInspector.super.call( this, ve.extendObject( {padded: false}, config ) );
};

/* Inheritance */
OO.inheritClass( ve.ui.CountFilesInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ve.ui.CountFilesInspector.static.name = 'countFilesInspector';

ve.ui.CountFilesInspector.static.title = OO.ui.deferMsg( 'bs-countthings-ve-countfiles-title' );

ve.ui.CountFilesInspector.static.modelClasses = [ ve.dm.CountFilesNode ];

//This tag does not have any content
ve.ui.CountFilesInspector.static.allowedEmpty = true;
ve.ui.CountFilesInspector.static.selfCloseEmptyBody = true;
/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CountFilesInspector.prototype.initialize = function () {
	// Parent method
	ve.ui.CountFilesInspector.super.prototype.initialize.call( this );

	this.input.$element.remove();

	// Initialization
	this.$content.addClass( 've-ui-countfiles-inspector-content' );	

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


ve.ui.CountFilesInspector.prototype.getSetupProcess = function ( data ) {
	console.log(data);
	return ve.ui.CountFilesInspector.super.prototype.getSetupProcess.call( this, data ).next( function () {
			this.on( 'click', this.onChangeHandler );
			//Get this out of here
			this.actions.setAbilities( { done: true } );
		}, this );
};

ve.ui.CountFilesInspector.prototype.wireEvents = function () {
};

ve.ui.CountFilesInspector.prototype.updateMwData = function ( mwData ) {
	// Parent method
	ve.ui.CountFilesInspector.super.prototype.updateMwData.call( this, mwData );
};

/**
 * @inheritdoc
 */
ve.ui.CountFilesInspector.prototype.formatGeneratedContentsError = function ( $element ) {
	return $element.text().trim();
};

/**
 * Append the error to the current tab panel.
 */
ve.ui.CountFilesInspector.prototype.onTabPanelSet = function () {
	this.indexLayout.getCurrentTabPanel().$element.append( this.generatedContentsError.$element );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CountFilesInspector );
