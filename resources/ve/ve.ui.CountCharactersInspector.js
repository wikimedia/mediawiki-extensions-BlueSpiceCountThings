ve.ui.CountCharactersInspector = function VeUiCountCharactersInspector( config ) {
	// Parent constructor
	ve.ui.CountCharactersInspector.super.call( this, ve.extendObject( {padded: true}, config ) );
};

/* Inheritance */
OO.inheritClass( ve.ui.CountCharactersInspector, ve.ui.MWLiveExtensionInspector );

/* Static properties */

ve.ui.CountCharactersInspector.static.name = 'countCharactersInspector';

ve.ui.CountCharactersInspector.static.title = OO.ui.deferMsg( 'bs-countthings-ve-countcharacters-title' );

ve.ui.CountCharactersInspector.static.modelClasses = [ ve.dm.CountCharactersNode ];

ve.ui.CountCharactersInspector.static.dir = 'ltr';

//This tag does not have any content
ve.ui.CountCharactersInspector.static.allowedEmpty = true;
ve.ui.CountCharactersInspector.static.selfCloseEmptyBody = false;
/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CountCharactersInspector.prototype.initialize = function () {
	// Parent method
	ve.ui.CountCharactersInspector.super.prototype.initialize.call( this );

	this.indexLayout = new OO.ui.PanelLayout( {
		scrollable: false,
		expanded: false,
		padded: true
	} );

	this.createFields();
	this.setLayouts();
	// Initialization
	this.$content.addClass( 've-ui-countcharacters-inspector-content' );

	this.indexLayout.$element.append(
		this.modeLayout.$element,
		this.generatedContentsError.$element
	);
	this.form.$element.append(
		this.indexLayout.$element
	);
};

ve.ui.CountCharactersInspector.prototype.createFields = function () {
	this.modeInput = new OO.ui.DropdownInputWidget( {
		options: [
			{
				data: 'all',
				label: mw.message( 'bs-countthings-ve-countcharacters-mode-all' ).plain()
			},
			{
				data: 'chars',
				label: mw.message( 'bs-countthings-ve-countcharacters-mode-charsonly' ).plain()
			},
			{
				data: 'words',
				label: mw.message( 'bs-countthings-ve-countcharacters-mode-wordsonly' ).plain()
			},
			{
				data: 'chars words',
				label: mw.message( 'bs-countthings-ve-countcharacters-mode-wordsandchars' ).plain()
			},
			{
				data: 'pages',
				label: mw.message( 'bs-ccountthings-ve-ountcharacters-mode-pagesonly' ).plain()
			}
		]
	} );
};

ve.ui.CountCharactersInspector.prototype.setLayouts = function () {
	this.modeLayout = new OO.ui.FieldLayout( this.modeInput, {
		align: 'right',
		label: ve.msg( 'bs-countthings-ve-countthingsinspector-mode' )
	} );
};
ve.ui.CountCharactersInspector.prototype.getSetupProcess = function ( data ) {
	return ve.ui.CountCharactersInspector.super.prototype.getSetupProcess.call( this, data )
		.next( function () {
			var attributes = this.selectedNode.getAttribute( 'mw' ).attrs;

			if ( attributes.mode ) {
				this.modeInput.setValue( attributes.mode || 'all' );
			}

			this.wireEvents();

			//Get this out of here
			this.actions.setAbilities( {done: true} );
		}, this );
};

ve.ui.CountCharactersInspector.prototype.wireEvents = function () {
	this.modeInput.on( 'change', this.onChangeHandler );
};

ve.ui.CountCharactersInspector.prototype.updateMwData = function ( mwData ) {
	// Parent method
	ve.ui.CountCharactersInspector.super.prototype.updateMwData.call( this, mwData );
	// Get data from inspector
	if ( this.modeInput.getValue() ) {
		mwData.attrs.mode = this.modeInput.getValue();
	} else {
		delete( mwData.attrs.mode );
	}
};

/**
 * @inheritdoc
 */
ve.ui.CountCharactersInspector.prototype.formatGeneratedContentsError = function ( $element ) {
	return $element.text().trim();
};

/**
 * Append the error to the current tab panel.
 */
ve.ui.CountCharactersInspector.prototype.onTabPanelSet = function () {
	this.indexLayout.getCurrentTabPanel().$element.append( this.generatedContentsError.$element );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CountCharactersInspector );
