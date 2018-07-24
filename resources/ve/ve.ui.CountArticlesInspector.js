ve.ui.CountArticlesInspector = function VeUiCountArticlesInspector( config ) {
	// Parent constructor
	ve.ui.CountArticlesInspector.super.call( this, ve.extendObject( {padded: false}, config ) );
};

/* Inheritance */
OO.inheritClass( ve.ui.CountArticlesInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ve.ui.CountArticlesInspector.static.name = 'countArticlesInspector';

ve.ui.CountArticlesInspector.static.title = OO.ui.deferMsg( 'bs-countthings-ve-countarticles-title' );

ve.ui.CountArticlesInspector.static.modelClasses = [ ve.dm.CountArticlesNode ];

//This tag does not have any content
ve.ui.CountArticlesInspector.static.allowedEmpty = true;
ve.ui.CountArticlesInspector.static.selfCloseEmptyBody = true;
/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CountArticlesInspector.prototype.initialize = function () {
	// Parent method
	ve.ui.CountArticlesInspector.super.prototype.initialize.call( this );

	this.input.$element.remove();

	// Initialization
	this.$content.addClass( 've-ui-countarticles-inspector-content' );	

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


ve.ui.CountArticlesInspector.prototype.getSetupProcess = function ( data ) {
	console.log(data);
	return ve.ui.CountArticlesInspector.super.prototype.getSetupProcess.call( this, data ).next( function () {
			this.on( 'click', this.onChangeHandler );
			//Get this out of here
			this.actions.setAbilities( { done: true } );
		}, this );
};

ve.ui.CountArticlesInspector.prototype.wireEvents = function () {
};

ve.ui.CountArticlesInspector.prototype.updateMwData = function ( mwData ) {
	// Parent method
	ve.ui.CountArticlesInspector.super.prototype.updateMwData.call( this, mwData );
};

/**
 * @inheritdoc
 */
ve.ui.CountArticlesInspector.prototype.formatGeneratedContentsError = function ( $element ) {
	return $element.text().trim();
};

/**
 * Append the error to the current tab panel.
 */
ve.ui.CountArticlesInspector.prototype.onTabPanelSet = function () {
	this.indexLayout.getCurrentTabPanel().$element.append( this.generatedContentsError.$element );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CountArticlesInspector );
