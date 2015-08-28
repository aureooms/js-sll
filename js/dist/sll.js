"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/Node.js */

		var Node = function Node(next, value) {

			this.next = next;
			this.value = value;
		};

		exports.Node = Node;

		/* js/src/utils */
		/* js/src/utils/iter.js */

		var iter = regeneratorRuntime.mark(function iter(head) {
			return regeneratorRuntime.wrap(function iter$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(head !== null)) {
							context$3$0.next = 6;
							break;
						}

						context$3$0.next = 3;
						return head.value;

					case 3:
						head = head.next;

						context$3$0.next = 0;
						break;

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, iter, this);
		});

		exports.iter = iter;

		/* js/src/utils/len.js */

		var len = function len(head) {

			var length = 0;

			while (head !== null) {

				++length;
				head = head.next;
			}

			return length;
		};

		exports.len = len;

		/* js/src/utils/list.js */

		var list = function list(iterable) {

			var pt = new Node(null, undefined);

			var current = pt;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					current = current.next = new Node(null, value);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return pt.next;
		};

		exports.list = list;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-sll", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["sll"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-sll");
})();