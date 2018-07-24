ve.dm.CountFilesNode = function VeDmCountFilesNode() {
	// Parent constructor
	ve.dm.CountFilesNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CountFilesNode, ve.dm.MWInlineExtensionNode );

/* Static members */

ve.dm.CountFilesNode.static.name = 'countfiles';

ve.dm.CountFilesNode.static.tagName = 'bs:countfiles';

// Name of the parser tag
ve.dm.CountFilesNode.static.extensionName = 'bs:countfiles';


// This tag renders without content
ve.dm.CountFilesNode.static.childNodeTypes = [];
ve.dm.CountFilesNode.static.isContent = true;


/* Registration */
ve.dm.modelRegistry.register( ve.dm.CountFilesNode );
