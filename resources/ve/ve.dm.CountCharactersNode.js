ve.dm.CountCharactersNode = function VeDmCountCharactersNode() {
	// Parent constructor
	ve.dm.CountCharactersNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CountCharactersNode, ve.dm.MWInlineExtensionNode );

/* Static members */

ve.dm.CountCharactersNode.static.name = 'countcharacters';

ve.dm.CountCharactersNode.static.tagName = 'bs:countcharacters';

// Name of the parser tag
ve.dm.CountCharactersNode.static.extensionName = 'bs:countcharacters';


// This tag renders without content
ve.dm.CountCharactersNode.static.childNodeTypes = [];
ve.dm.CountCharactersNode.static.isContent = false;


/* Registration */
ve.dm.modelRegistry.register( ve.dm.CountCharactersNode );
