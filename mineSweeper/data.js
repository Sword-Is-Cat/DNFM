function newNode(name, id, type) {
	let node = new Object();
	node.name = name;
	node.child = new Array();
	node.id = id;
	node.type = type || 'null';
	return node;
}

function getData() {

	let root = newNode('root');

	let bingo = newNode('길드빙고');
	let ujang = newNode('유적지쟁탈전');
	let maps = newNode('맵모아보기', 'maps');

	root.child.push(bingo);
	root.child.push(ujang);
	root.child.push(maps);


	// for (let idx = 0; idx < 8; idx++) {
	// bingo.child.push(newNode(idx == 0 ? null : idx + "단계"));
	// }

	// 빙고 idx단계 (세부설명, ytbId)
	// bingo.child[5].child.push(newNode('221001', 'hLSQ6BcD0oU', 'BINGO_5'));
	bingo.child.push(newNode('3단계', 'Mt5jkh6k0oo', 'BINGO_3'));

	bingo.child.push(newNode('4단계', 'vCCWVECQ1Oc', 'BINGO_4'));
	// bingo.child[4].child.push(newNode('3단계', 'LDpfI4JbOSc', 'BINGO_4'));

	bingo.child.push(newNode('5단계', 'dfc5sn_SbB8', 'BINGO_5'));
	// bingo.child[5].child.push(newNode('3단계', 'q5VOW0LBhsM', 'BINGO_5'));

	bingo.child.push(newNode('6단계', 'vVXNkmBvoBM', 'BINGO_6'));
	// bingo.child[6].child.push(newNode('3단계', '7kUqqwDtxdc', 'BINGO_6'));

	bingo.child.push(newNode('7단계', 'N9XkhyWeEt0', 'BINGO_7'));
	// bingo.child[7].child.push(newNode('3단계', 'dq7GFnUWE0w', 'BINGO_7'));

	// 유적지쟁탈전
	let ujangDate;

	ujangDate = newNode('허허벌판', 'CjHi_7En9wg', 'EMPTY');
	ujang.child.push(ujangDate);

	ujangDate = newNode('누운Y자', 'kMt4YZiGMSA', 'TURNY');
	ujang.child.push(ujangDate);

	ujangDate = newNode('능선', 'fV3OF8xRooI', 'VALLEY');
	ujang.child.push(ujangDate);

	ujangDate = newNode('4개의방', 'HUwzl3uqNGs', 'FOUR');
	ujang.child.push(ujangDate);

	ujangDate = newNode('고블린보너스', 'w5fa6f7j5X8', 'FUCK');
	ujang.child.push(ujangDate);

	ujangDate = newNode('닫힌십자가', '0PQTPYK1BfQ', 'CROSSCL');
	ujang.child.push(ujangDate);

	ujangDate = newNode('열린십자가', 'I8CJ11VLw9w', 'CROSSOP');
	ujang.child.push(ujangDate);

	ujangDate = newNode('나이테', '56Eri_jpWvE', 'RING');
	ujang.child.push(ujangDate);

	ujangDate = newNode('출구앞문', '-Tk_GZlCVgY', 'EXIT');
	ujang.child.push(ujangDate);

	ujangDate = newNode('20분 풀영상');
	ujang.child.push(ujangDate);
	ujangDate.child.push(newNode('221008', '_G_3AIJjMWc'));

	return root;
}

function getMapData() {

	let mapData = new Object();

	let EMPTY = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'J', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'J', 'J', 'G' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'G', 'G' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let FUCK = [ [ ' ', ' ', ' ', ' ', 'K', 'W', 'J', 'G', 'G', 'G', 'J', 'W', 'K', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', 'G', 'G', 'G', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', 'G', 'G', 'G', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'O', 'W', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'G', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'G', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'G', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let TURNY = [ [ ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'S', 'W', 'W', 'W' ],
			[ 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', 'W', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let VALLEY = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', 'W', 'W', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let FOUR = [ [ ' ', ' ', ' ', 'K', 'W', ' ', ' ', ' ', ' ', ' ', 'K', 'W', 'K', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'K', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'K', ' ', ' ', ' ' ] ];

	let CROSSOP = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let RING = [ [ ' ', ' ', ' ', ' ', ' ', 'W', ' ', 'K', ' ', 'W', ' ', ' ', ' ', 'W', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'S', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'K' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', 'S', 'W', 'W', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let EXIT = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let CROSSCL = [ [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'K', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'K', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'K', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'K', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let BINGO_1;

	let BINGO_2;

	let BINGO_3 = [ [ 'E', 'W', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ' ],
			[ 'S', 'W', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W' ],
			[ 'K', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W' ],
			[ 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'K' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ' ],
			[ 'K', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ' ], ];

	let BINGO_4 = [ [ 'K', ' ', ' ', ' ', ' ', 'W', 'E', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', 'K' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ' ] ];

	let BINGO_5 = [ [ 'K', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', 'K' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', 'E', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', 'W', 'S', 'W', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ' ],
			[ ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', ' ' ],
			[ 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W' ],
			[ ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'K' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', 'K', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ 'K', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ' ] ];

	let BINGO_6 = [ [ ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', 'E' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'K' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'K', ' ', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', ' ', ' ', ' ', 'W', 'W', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', 'W', 'W', ' ', 'K', 'W', 'W', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'K', ' ', ' ', ' ' ],
			[ ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ', ' ' ],
			[ 'K', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', ' ', ' ', ' ' ],
			[ 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ' ] ];

	let BINGO_7 = [ [ 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ 'W', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'E', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'W', 'W' ],
			[ 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', 'S', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
			[ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K', 'W', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K' ] ];

	mapData['EMPTY'] = EMPTY;
	mapData['EXIT'] = EXIT;
	mapData['FUCK'] = FUCK;
	mapData['TURNY'] = TURNY;
	mapData['CROSSCL'] = CROSSCL;
	mapData['CROSSOP'] = CROSSOP;
	mapData['VALLEY'] = VALLEY;
	mapData['FOUR'] = FOUR;
	mapData['RING'] = RING;

	mapData['BINGO_1'] = BINGO_1;
	mapData['BINGO_2'] = BINGO_2;
	mapData['BINGO_3'] = BINGO_3;
	mapData['BINGO_4'] = BINGO_4;
	mapData['BINGO_5'] = BINGO_5;
	mapData['BINGO_6'] = BINGO_6;
	mapData['BINGO_7'] = BINGO_7;

	return mapData;

}