Bridge.assembly("WebMrbc", function ($asm, globals) {
    "use strict";

    Bridge.define("Blockly.Msg", {
        statics: {
            ADD_COMMENT: "コメントを追加",
            CHANGE_VALUE_TITLE: "値を変更します。",
            CLEAN_UP: "ブロックの整理",
            COLLAPSE_ALL: "ブロックを折りたたむ",
            COLLAPSE_BLOCK: "ブロックを折りたたむ",
            DELETE_ALL_BLOCKS: "%1件のすべてのブロックを消しますか？",
            DELETE_BLOCK: "ブロックを消す",
            DELETE_VARIABLE: "Delete the '%1' variable",
            DELETE_VARIABLE_CONFIRMATION: "Delete %1 uses of the '%2' variable?",
            DELETE_X_BLOCKS: "%1 個のブロックを消す",
            DISABLE_BLOCK: "ブロックを無効にします。",
            DUPLICATE_BLOCK: "複製",
            ENABLE_BLOCK: "ブロックを有効にします。",
            EXPAND_ALL: "ブロックを展開します。",
            EXPAND_BLOCK: "ブロックを展開します。",
            EXTERNAL_INPUTS: "外部入力",
            HELP: "ヘルプ",
            INLINE_INPUTS: "インライン入力",
            NEW_VARIABLE: "新しい変数",
            NEW_VARIABLE_TITLE: "新しい変数の、名前",
            REDO: "やり直し",
            REMOVE_COMMENT: "コメントを削除",
            RENAME_VARIABLE: "変数の名前を変更.",
            RENAME_VARIABLE_TITLE: "%1の変数すべてを名前変更します。",
            TODAY: "今日",
            UNDO: "取り消し",
            VARIABLE_ALREADY_EXISTS: "A variable named '%1' already exists.",
            COLOUR_BLEND_COLOUR1: "色 1",
            COLOUR_BLEND_COLOUR2: "色 2",
            COLOUR_BLEND_HELPURL: "http://meyerwebcom/eric/tools/color-blend/",
            COLOUR_BLEND_RATIO: "割合",
            COLOUR_BLEND_TITLE: "ブレンド",
            COLOUR_BLEND_TOOLTIP: "ブレンド2 つの色を指定された比率に混ぜる」  (00 ～ 10)。",
            COLOUR_PICKER_HELPURL: "https://jawikipediaorg/wiki/色",
            COLOUR_PICKER_TOOLTIP: "パレットから色を選んでください。",
            COLOUR_RANDOM_HELPURL: "http://randomcolourcom",
            COLOUR_RANDOM_TITLE: "ランダムな色",
            COLOUR_RANDOM_TOOLTIP: "ランダムな色を選択します。",
            COLOUR_RGB_BLUE: "青",
            COLOUR_RGB_GREEN: "緑",
            COLOUR_RGB_HELPURL: "http://wwwdecembercom/html/spec/colorperhtml",
            COLOUR_RGB_RED: "赤",
            COLOUR_RGB_TITLE: "カラーと",
            COLOUR_RGB_TOOLTIP: "赤、緑、および青の指定された量で色を作成します。すべての値は 0 ～ 100 の間でなければなりません。",
            CONTROLS_FLOW_STATEMENTS_HELPURL: "https://githubcom/google/blockly/wiki/Loops#loop-termination-blocks",
            CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: "ループから抜け出す",
            CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: "ループの次の反復処理を続行します。",
            CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: "含むループから抜け出します。",
            CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: "このループの残りの部分をスキップし、次のイテレーションに進みます。",
            CONTROLS_FLOW_STATEMENTS_WARNING: "注意: このブロックは、ループ内でのみ使用します。",
            CONTROLS_FOREACH_HELPURL: "https://githubcom/google/blockly/wiki/Loops#for-each",
            CONTROLS_FOREACH_INPUT_DO: "してください",
            CONTROLS_FOREACH_TITLE: "各項目の %1 リストで %2",
            CONTROLS_FOREACH_TOOLTIP: "リストの各項目に対して変数 '%1' のアイテムに設定し、いくつかのステートメントをしてください。",
            CONTROLS_FOR_HELPURL: "https://githubcom/google/blockly/wiki/Loops#count-with",
            CONTROLS_FOR_INPUT_DO: "してください",
            CONTROLS_FOR_TITLE: "で、カウントします。 %1 %2 から%3、 %4 で",
            CONTROLS_FOR_TOOLTIP: "変数 \"%1\"は、指定した間隔ごとのカウントを開始番号から 終了番号まで、値をとり、指定したブロックを行う必要があります。",
            CONTROLS_IF_ELSEIF_TITLE_ELSEIF: "他でもし",
            CONTROLS_IF_ELSEIF_TOOLTIP: "場合に条件にブロック追加。",
            CONTROLS_IF_ELSE_TITLE_ELSE: "他",
            CONTROLS_IF_ELSE_TOOLTIP: "Ifブロックに、すべてをキャッチする条件を追加。",
            CONTROLS_IF_HELPURL: "https://githubcom/google/blockly/wiki/IfElse",
            CONTROLS_IF_IF_TITLE_IF: "もし",
            CONTROLS_IF_IF_TOOLTIP: "追加、削除、またはセクションを順序変更して、ブロックをこれを再構成します。",
            CONTROLS_IF_MSG_ELSE: "他",
            CONTROLS_IF_MSG_ELSEIF: "他でもし",
            CONTROLS_IF_MSG_IF: "もし",
            CONTROLS_IF_MSG_THEN: "してください",
            CONTROLS_IF_TOOLTIP_1: "値が true の場合はその後ステートメントを行をいくつかします。",
            CONTROLS_IF_TOOLTIP_2: "値が true 場合は、ステートメントの最初のブロックを行います。それ以外の場合は、ステートメントの 2 番目のブロックを行います。",
            CONTROLS_IF_TOOLTIP_3: "最初の値が true 場合は、ステートメントの最初のブロックを行います。それ以外の場合は、2 番目の値が true の場合、ステートメントの 2 番目のブロックをします。",
            CONTROLS_IF_TOOLTIP_4: "最初の値が true 場合は、ステートメントの最初のブロックを行います。2 番目の値が true の場合は、ステートメントの 2 番目のブロックを行います。それ以外の場合は最後のブロックのステートメントを行います。",
            CONTROLS_REPEAT_HELPURL: "https://jawikipediaorg/wiki/for文",
            CONTROLS_REPEAT_INPUT_DO: "してください",
            CONTROLS_REPEAT_TITLE: "%1 回、繰り返します",
            CONTROLS_REPEAT_TOOLTIP: "いくつかのステートメントを数回行います。",
            CONTROLS_WHILEUNTIL_HELPURL: "https://githubcom/google/blockly/wiki/Loops#repeat",
            CONTROLS_WHILEUNTIL_INPUT_DO: "してください",
            CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: "までを繰り返します",
            CONTROLS_WHILEUNTIL_OPERATOR_WHILE: "つつその間、繰り返す4",
            CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: "値は false のあいだ、いくつかのステートメントを行います。",
            CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: "値は true のあいだ、いくつかのステートメントを行います。",
            LISTS_CREATE_EMPTY_HELPURL: "https://githubcom/google/blockly/wiki/Lists#create-empty-list",
            LISTS_CREATE_EMPTY_TITLE: "空のリストを作成します。",
            LISTS_CREATE_EMPTY_TOOLTIP: "長さゼロ、データ レコード空のリストを返します",
            LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: "リスト",
            LISTS_CREATE_WITH_CONTAINER_TOOLTIP: "追加、削除、またはセクションを順序変更して、ブロックを再構成します。",
            LISTS_CREATE_WITH_HELPURL: "https://githubcom/google/blockly/wiki/Lists#create-list-with",
            LISTS_CREATE_WITH_INPUT_WITH: "これを使ってリストを作成します。",
            LISTS_CREATE_WITH_ITEM_TITLE: "項目",
            LISTS_CREATE_WITH_ITEM_TOOLTIP: "リストにアイテムを追加します。",
            LISTS_CREATE_WITH_TOOLTIP: "アイテム数かぎりないのリストを作成します。",
            LISTS_GET_INDEX_FIRST: "最初",
            LISTS_GET_INDEX_FROM_END: "終しまいから #",
            LISTS_GET_INDEX_FROM_START: "#",
            LISTS_GET_INDEX_GET: "取得",
            LISTS_GET_INDEX_GET_REMOVE: "取得と削除",
            LISTS_GET_INDEX_HELPURL: "https://githubcom/google/blockly/wiki/Lists#getting-items-from-a-list",
            LISTS_GET_INDEX_INPUT_IN_LIST: "リストで",
            LISTS_GET_INDEX_LAST: "最後",
            LISTS_GET_INDEX_RANDOM: "ランダム",
            LISTS_GET_INDEX_REMOVE: "削除",
            LISTS_GET_INDEX_TAIL: "",
            LISTS_GET_INDEX_TOOLTIP_GET_FIRST: "リストの最初の項目を返信します。",
            LISTS_GET_INDEX_TOOLTIP_GET_FROM: "リスト内の指定位置にある項目を返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_LAST: "リストの最後の項目を返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_RANDOM: "ランダム アイテム リストを返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST: "リスト内の最初の項目を削除したあと返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM: "リスト内の指定位置にある項目を削除し、返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST: "リスト内の最後の項目を削除したあと返します。",
            LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM: "リストのランダムなアイテムを削除し、返します。",
            LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST: "リスト内の最初の項目を削除します。",
            LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM: "リスト内の指定位置にある項目を返します。",
            LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST: "リスト内の最後の項目を削除します。",
            LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM: "リスト内にある任意のアイテムを削除します。",
            LISTS_GET_SUBLIST_END_FROM_END: "最後から＃へ",
            LISTS_GET_SUBLIST_END_FROM_START: "＃へ",
            LISTS_GET_SUBLIST_END_LAST: "最後へ",
            LISTS_GET_SUBLIST_HELPURL: "https://githubcom/google/blockly/wiki/Lists#getting-a-sublist",
            LISTS_GET_SUBLIST_INPUT_IN_LIST: "リストで",
            LISTS_GET_SUBLIST_START_FIRST: "最初からサブリストを取得する。",
            LISTS_GET_SUBLIST_START_FROM_END: "端から #のサブリストを取得します。",
            LISTS_GET_SUBLIST_START_FROM_START: "# からサブディレクトリのリストを取得します。",
            LISTS_GET_SUBLIST_TAIL: "",
            LISTS_GET_SUBLIST_TOOLTIP: "リストの指定された部分のコピーを作成してくださ。",
            LISTS_INDEX_FROM_END_TOOLTIP: "%1 は、最後の項目です。",
            LISTS_INDEX_FROM_START_TOOLTIP: "%1 は、最初の項目です。",
            LISTS_INDEX_OF_FIRST: "最初に見つかった項目を検索します。",
            LISTS_INDEX_OF_HELPURL: "https://githubcom/google/blockly/wiki/Lists#getting-items-from-a-list",
            LISTS_INDEX_OF_INPUT_IN_LIST: "リストで",
            LISTS_INDEX_OF_LAST: "最後に見つかったアイテムを見つける",
            LISTS_INDEX_OF_TOOLTIP: "リスト項目の最初/最後に出現するインデックス位置を返します。項目が見つからない場合は %1 を返します。",
            LISTS_INLIST: "リストで",
            LISTS_ISEMPTY_HELPURL: "https://githubcom/google/blockly/wiki/Lists#is-empty",
            LISTS_ISEMPTY_TITLE: "%1 が空",
            LISTS_ISEMPTY_TOOLTIP: "リストが空の場合は、true を返します。",
            LISTS_LENGTH_HELPURL: "https://githubcom/google/blockly/wiki/Lists#length-of",
            LISTS_LENGTH_TITLE: " %1の長さ",
            LISTS_LENGTH_TOOLTIP: "リストの長さを返します。",
            LISTS_REPEAT_HELPURL: "https://githubcom/google/blockly/wiki/Lists#create-list-with",
            LISTS_REPEAT_TITLE: "アイテム %1 と一緒にリストを作成し %2 回繰り",
            LISTS_REPEAT_TOOLTIP: "指定された値をなんどか繰り返してリストを作ります。",
            LISTS_SET_INDEX_HELPURL: "https://githubcom/google/blockly/wiki/Lists#in-list--set",
            LISTS_SET_INDEX_INPUT_IN_LIST: "リストで",
            LISTS_SET_INDEX_INPUT_TO: "として",
            LISTS_SET_INDEX_INSERT: "挿入します。",
            LISTS_SET_INDEX_SET: "セット",
            LISTS_SET_INDEX_TOOLTIP: "",
            LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST: "リストの先頭に項目を挿入します。",
            LISTS_SET_INDEX_TOOLTIP_INSERT_FROM: "リスト内の指定位置に項目を挿入します。",
            LISTS_SET_INDEX_TOOLTIP_INSERT_LAST: "リストの末尾に項目を追加します。",
            LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM: "リストに項目をランダムに挿入します。",
            LISTS_SET_INDEX_TOOLTIP_SET_FIRST: "リスト内に最初の項目を設定します。",
            LISTS_SET_INDEX_TOOLTIP_SET_FROM: "リスト内の指定された位置に項目を設定します。",
            LISTS_SET_INDEX_TOOLTIP_SET_LAST: "リスト内の最後の項目を設定します。",
            LISTS_SET_INDEX_TOOLTIP_SET_RANDOM: "リスト内にランダムなアイテムを設定します。",
            LISTS_SORT_HELPURL: "https://githubcom/google/blockly/wiki/Lists#sorting-a-list",
            LISTS_SORT_ORDER_ASCENDING: "昇順",
            LISTS_SORT_ORDER_DESCENDING: "降順",
            LISTS_SORT_TITLE: "sort %1 %2 %3",
            LISTS_SORT_TOOLTIP: "Sort a copy of a list.",
            LISTS_SORT_TYPE_IGNORECASE: "alphabetic, ignore case",
            LISTS_SORT_TYPE_NUMERIC: "numeric",
            LISTS_SORT_TYPE_TEXT: "alphabetic",
            LISTS_SPLIT_HELPURL: "https://githubcom/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",
            LISTS_SPLIT_LIST_FROM_TEXT: "テキストからリストを作る",
            LISTS_SPLIT_TEXT_FROM_LIST: "リストからテキストを作る",
            LISTS_SPLIT_TOOLTIP_JOIN: "Join a list of texts into one text, separated by a delimiter.",
            LISTS_SPLIT_TOOLTIP_SPLIT: "Split text into a list of texts, breaking at each delimiter.",
            LISTS_SPLIT_WITH_DELIMITER: "with delimiter",
            LOGIC_BOOLEAN_FALSE: "false",
            LOGIC_BOOLEAN_HELPURL: "https://githubcom/google/blockly/wiki/Logic#values",
            LOGIC_BOOLEAN_TOOLTIP: "True または false を返します。",
            LOGIC_BOOLEAN_TRUE: "true",
            LOGIC_COMPARE_HELPURL: "https://jawikipediaorg/wiki/不等式",
            LOGIC_COMPARE_TOOLTIP_EQ: "もし両方がお互いに等しく入力した場合は true を返します。",
            LOGIC_COMPARE_TOOLTIP_GT: "最初の入力が 2 番目の入力よりも大きい場合は true を返します。",
            LOGIC_COMPARE_TOOLTIP_GTE: "もし入力がふたつめの入よりも大きかったらtrueをり返します。",
            LOGIC_COMPARE_TOOLTIP_LT: "最初の入力が 2 番目の入力よりも小さいい場合は true を返します。",
            LOGIC_COMPARE_TOOLTIP_LTE: "もし、最初の入力が二つ目入力より少ないか、おなじであったらTRUEをかえしてください",
            LOGIC_COMPARE_TOOLTIP_NEQ: "両方の入力が互いに等しくない場合に true を返します。",
            LOGIC_NEGATE_HELPURL: "https://jawikipediaorg/wiki/否定",
            LOGIC_NEGATE_TITLE: "%1 ではないです。",
            LOGIC_NEGATE_TOOLTIP: "入力が false の場合は、true を返します。入力が true の場合は false を返します。",
            LOGIC_NULL: "null",
            LOGIC_NULL_HELPURL: "https://enwikipediaorg/wiki/Nullable_type",
            LOGIC_NULL_TOOLTIP: "Null を返します。",
            LOGIC_OPERATION_AND: "そして",
            LOGIC_OPERATION_HELPURL: "https://githubcom/google/blockly/wiki/Logic#logical-operations",
            LOGIC_OPERATION_OR: "または",
            LOGIC_OPERATION_TOOLTIP_AND: "両方の入力がおんなじ場わいわtrue を返します。",
            LOGIC_OPERATION_TOOLTIP_OR: "最低少なくとも 1 つの入力が true の場合は true を返します。",
            LOGIC_TERNARY_CONDITION: "テスト",
            LOGIC_TERNARY_HELPURL: "https://jawikipediaorg/wiki/%3F:",
            LOGIC_TERNARY_IF_FALSE: "false の場合",
            LOGIC_TERNARY_IF_TRUE: "true の場合",
            LOGIC_TERNARY_TOOLTIP: "'テスト' の条件をチェックします。条件が true の場合、'true' の値を返します。それ以外の場合 'false' のを返します。",
            MATH_ADDITION_SYMBOL: "+",
            MATH_ARITHMETIC_HELPURL: "https://jawikipediaorg/wiki/算術",
            MATH_ARITHMETIC_TOOLTIP_ADD: "2 つの数の合計を返します。",
            MATH_ARITHMETIC_TOOLTIP_DIVIDE: "2 つの数の商を返します。",
            MATH_ARITHMETIC_TOOLTIP_MINUS: "2 つの数の差を返します。",
            MATH_ARITHMETIC_TOOLTIP_MULTIPLY: "2 つの数の積を返します。",
            MATH_ARITHMETIC_TOOLTIP_POWER: "最初の数を2 番目の値で累乗した結果を返します。",
            MATH_CHANGE_HELPURL: "https://jawikipediaorg/wiki/加法",
            MATH_CHANGE_TITLE: "変更 %1 に %2",
            MATH_CHANGE_TITLE_ITEM: "項目",
            MATH_CHANGE_TOOLTIP: "'%1' をたします。",
            MATH_CONSTANT_HELPURL: "https://jawikipediaorg/wiki/数学定数",
            MATH_CONSTANT_TOOLTIP: "いずれかの共通の定数のを返す: π (3141…), e (2718…), φ (1618…), sqrt(2) (1414…), sqrt(½) (0707…), or ∞ (無限).",
            MATH_CONSTRAIN_HELPURL: "https://enwikipediaorg/wiki/Clamping_%28graphics%29",
            MATH_CONSTRAIN_TITLE: "制限%1下リミット%2上限リミット%3",
            MATH_CONSTRAIN_TOOLTIP: "値を、上限 x と下限 y のあいだに制限んする（上限と下限が、x と  y　とに同じ場合わ、上限の値は　x, 下限の値はy）。",
            MATH_DIVISION_SYMBOL: "÷",
            MATH_IS_DIVISIBLE_BY: "割り切れる",
            MATH_IS_EVEN: "わ偶数",
            MATH_IS_NEGATIVE: "負の値",
            MATH_IS_ODD: "奇数です。",
            MATH_IS_POSITIVE: "正の値",
            MATH_IS_PRIME: "素数です",
            MATH_IS_TOOLTIP: "数字が、偶数、奇数、素数、整数、正数、負数、またはそれが特定の数で割り切れる場合かどうかを確認してください。どの制限が一つでも本当でしたら true をかえしてください、そうでない場合わ falseを返してください。",
            MATH_IS_WHOLE: "は整数",
            MATH_MODULO_HELPURL: "https://enwikipediaorg/wiki/Modulo_operation",
            MATH_MODULO_TITLE: "残りの %1 ÷ %2",
            MATH_MODULO_TOOLTIP: "2つの数値を除算した余りを返します。",
            MATH_MULTIPLICATION_SYMBOL: "×",
            MATH_NUMBER_HELPURL: "https://jawikipediaorg/wiki/数",
            MATH_NUMBER_TOOLTIP: "数です。",
            MATH_ONLIST_HELPURL: "",
            MATH_ONLIST_OPERATOR_AVERAGE: "リストの平均",
            MATH_ONLIST_OPERATOR_MAX: "リストの最大値",
            MATH_ONLIST_OPERATOR_MEDIAN: "リストの中央値",
            MATH_ONLIST_OPERATOR_MIN: "リストの最小の数",
            MATH_ONLIST_OPERATOR_MODE: "一覧モード",
            MATH_ONLIST_OPERATOR_RANDOM: "リストのランダム アイテム",
            MATH_ONLIST_OPERATOR_STD_DEV: "リストの標準偏差",
            MATH_ONLIST_OPERATOR_SUM: "リストの合計",
            MATH_ONLIST_TOOLTIP_AVERAGE: "リストの数値の平均 (算術平均) を返します。",
            MATH_ONLIST_TOOLTIP_MAX: "リストの最大数を返します。",
            MATH_ONLIST_TOOLTIP_MEDIAN: "リストの中央値の数を返します。",
            MATH_ONLIST_TOOLTIP_MIN: "リストの最小数を返します。",
            MATH_ONLIST_TOOLTIP_MODE: "リストで最も一般的な項目のリストを返します。",
            MATH_ONLIST_TOOLTIP_RANDOM: "リストからランダムに要素を返します。",
            MATH_ONLIST_TOOLTIP_STD_DEV: "リウトの標準偏差をかえす",
            MATH_ONLIST_TOOLTIP_SUM: "全部リストの数をたして返す",
            MATH_POWER_SYMBOL: "^",
            MATH_RANDOM_FLOAT_HELPURL: "https://enwikipediaorg/wiki/Random_number_generation",
            MATH_RANDOM_FLOAT_TITLE_RANDOM: "ランダムな分数",
            MATH_RANDOM_FLOAT_TOOLTIP: "ランダムな分数を返すー00 (包括) の間のと 10 (排他的な)。",
            MATH_RANDOM_INT_HELPURL: "https://enwikipediaorg/wiki/Random_number_generation",
            MATH_RANDOM_INT_TITLE: "%1 から %2 への無作為の整数",
            MATH_RANDOM_INT_TOOLTIP: "指定した下限の間、無作為なランダムな整数を返します。",
            MATH_ROUND_HELPURL: "https://jawikipediaorg/wiki/端数処理",
            MATH_ROUND_OPERATOR_ROUND: "概数",
            MATH_ROUND_OPERATOR_ROUNDDOWN: "端数を切り捨てる",
            MATH_ROUND_OPERATOR_ROUNDUP: "数値を切り上げ",
            MATH_ROUND_TOOLTIP: "数値を切り上げるか切り捨てる",
            MATH_SINGLE_HELPURL: "https://jawikipediaorg/wiki/平方根",
            MATH_SINGLE_OP_ABSOLUTE: "絶対値",
            MATH_SINGLE_OP_ROOT: "平方根",
            MATH_SINGLE_TOOLTIP_ABS: "絶対値を返す",
            MATH_SINGLE_TOOLTIP_EXP: "数値の e 粂を返す",
            MATH_SINGLE_TOOLTIP_LN: "数値の自然対数をかえしてください",
            MATH_SINGLE_TOOLTIP_LOG10: "log 10 を返す。",
            MATH_SINGLE_TOOLTIP_NEG: "負の数を返す",
            MATH_SINGLE_TOOLTIP_POW10: "１０の　x　乗",
            MATH_SINGLE_TOOLTIP_ROOT: "平方根を返す",
            MATH_SUBTRACTION_SYMBOL: "-",
            MATH_TRIG_ACOS: "acos",
            MATH_TRIG_ASIN: "asin",
            MATH_TRIG_ATAN: "atan",
            MATH_TRIG_COS: "cos",
            MATH_TRIG_HELPURL: "https://jawikipediaorg/wiki/三角関数",
            MATH_TRIG_SIN: "sin",
            MATH_TRIG_TAN: "tan",
            MATH_TRIG_TOOLTIP_ACOS: "arccosine の値を返す",
            MATH_TRIG_TOOLTIP_ASIN: "番号のarcsine を返すます",
            MATH_TRIG_TOOLTIP_ATAN: "番号のarctangent を返すます",
            MATH_TRIG_TOOLTIP_COS: "番号のcosineの次数を返す",
            MATH_TRIG_TOOLTIP_SIN: "番号のsineの次数を返す",
            MATH_TRIG_TOOLTIP_TAN: "番号のtangentの次数を返す",
            ORDINAL_NUMBER_SUFFIX: "",
            PROCEDURES_ALLOW_STATEMENTS: "allow statements",
            PROCEDURES_BEFORE_PARAMS: "で。",
            PROCEDURES_CALLNORETURN_HELPURL: "https://jawikipediaorg/wiki/サブルーチン",
            PROCEDURES_CALLNORETURN_TOOLTIP: "ユーザー定義関数 '%1' を実行します。",
            PROCEDURES_CALLRETURN_HELPURL: "https://jawikipediaorg/wiki/サブルーチン",
            PROCEDURES_CALLRETURN_TOOLTIP: "ユーザー定義関数 '%1' を実行し、その出力を使用します。",
            PROCEDURES_CALL_BEFORE_PARAMS: "で。",
            PROCEDURES_CREATE_DO: "%1をつくる",
            PROCEDURES_DEFNORETURN_COMMENT: "Describe this function...",
            PROCEDURES_DEFNORETURN_DO: "",
            PROCEDURES_DEFNORETURN_HELPURL: "https://jawikipediaorg/wiki/サブルーチン",
            PROCEDURES_DEFNORETURN_PROCEDURE: "何かしてください",
            PROCEDURES_DEFNORETURN_TITLE: "宛先",
            PROCEDURES_DEFNORETURN_TOOLTIP: "出力なしで関数を作成します。",
            PROCEDURES_DEFRETURN_COMMENT: "Describe this function...",
            PROCEDURES_DEFRETURN_DO: "",
            PROCEDURES_DEFRETURN_HELPURL: "https://jawikipediaorg/wiki/サブルーチン",
            PROCEDURES_DEFRETURN_PROCEDURE: "何かしてください",
            PROCEDURES_DEFRETURN_RETURN: "返す",
            PROCEDURES_DEFRETURN_TITLE: "宛先",
            PROCEDURES_DEFRETURN_TOOLTIP: "出力を持つ関数を作成します。",
            PROCEDURES_DEF_DUPLICATE_WARNING: "警告: この関数は、重複するパラメーターがあります。",
            PROCEDURES_HIGHLIGHT_DEF: "関数の内容を強調表示します。",
            PROCEDURES_IFRETURN_HELPURL: "http://c2com/cgi/wiki?GuardClause",
            PROCEDURES_IFRETURN_TOOLTIP: "1番目値が true の場合、2 番目の値を返します。",
            PROCEDURES_IFRETURN_WARNING: "警告: このブロックは、関数定義内でのみ使用できます。",
            PROCEDURES_MUTATORARG_TITLE: "入力名:",
            PROCEDURES_MUTATORARG_TOOLTIP: "Add an input to the function.",
            PROCEDURES_MUTATORCONTAINER_TITLE: "入力",
            PROCEDURES_MUTATORCONTAINER_TOOLTIP: "Add, remove, or reorder inputs to this function.",
            TEXT_APPEND_APPENDTEXT: "テキストを追加します。",
            TEXT_APPEND_HELPURL: "https://githubcom/google/blockly/wiki/Text#text-modification",
            TEXT_APPEND_TO: "宛先",
            TEXT_APPEND_TOOLTIP: "変数 '%1' にいくつかのテキストを追加します。",
            TEXT_APPEND_VARIABLE: "項目",
            TEXT_CHANGECASE_HELPURL: "https://githubcom/google/blockly/wiki/Text#adjusting-text-case",
            TEXT_CHANGECASE_OPERATOR_LOWERCASE: "小文字に",
            TEXT_CHANGECASE_OPERATOR_TITLECASE: "タイトル ケースに",
            TEXT_CHANGECASE_OPERATOR_UPPERCASE: "大文字に変換する",
            TEXT_CHANGECASE_TOOLTIP: "別のケースに、テキストのコピーを返します。",
            TEXT_CHARAT_FIRST: "最初の文字を得る",
            TEXT_CHARAT_FROM_END: "一番最後の言葉、キャラクターを所得",
            TEXT_CHARAT_FROM_START: "文字# を取得",
            TEXT_CHARAT_HELPURL: "https://githubcom/google/blockly/wiki/Text#extracting-text",
            TEXT_CHARAT_INPUT_INTEXT: "テキストで",
            TEXT_CHARAT_LAST: "最後の文字を得る",
            TEXT_CHARAT_RANDOM: "ランダムな文字を得る",
            TEXT_CHARAT_TAIL: "",
            TEXT_CHARAT_TOOLTIP: "指定された位置に文字を返します。",
            TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: "項目",
            TEXT_CREATE_JOIN_ITEM_TOOLTIP: "テキスト をアイテム追加します。",
            TEXT_CREATE_JOIN_TITLE_JOIN: "結合",
            TEXT_CREATE_JOIN_TOOLTIP: "追加、削除、またはセクションを順序変更して、ブロックを再構成します。",
            TEXT_GET_SUBSTRING_END_FROM_END: "文字列の＃ 終わりからの＃",
            TEXT_GET_SUBSTRING_END_FROM_START: "# の文字",
            TEXT_GET_SUBSTRING_END_LAST: "最後のの文字",
            TEXT_GET_SUBSTRING_HELPURL: "https://githubcom/google/blockly/wiki/Text#extracting-a-region-of-text",
            TEXT_GET_SUBSTRING_INPUT_IN_TEXT: "テキストで",
            TEXT_GET_SUBSTRING_START_FIRST: "部分文字列を取得する。",
            TEXT_GET_SUBSTRING_START_FROM_END: "部分文字列を取得する #端から得る",
            TEXT_GET_SUBSTRING_START_FROM_START: "文字列からの部分文字列を取得 ＃",
            TEXT_GET_SUBSTRING_TAIL: "",
            TEXT_GET_SUBSTRING_TOOLTIP: "テキストの指定部分を返します。",
            TEXT_INDEXOF_HELPURL: "https://githubcom/google/blockly/wiki/Text#finding-text",
            TEXT_INDEXOF_INPUT_INTEXT: "テキストで",
            TEXT_INDEXOF_OPERATOR_FIRST: "テキストの最初の出現箇所を検索します。",
            TEXT_INDEXOF_OPERATOR_LAST: "テキストの最後に見つかったを検索します。",
            TEXT_INDEXOF_TAIL: "",
            TEXT_INDEXOF_TOOLTIP: "最初のテキストの二番目のてきすとの、最初と最後の、出現したインデックスをかえします。テキストが見つからない場合は %1 を返します。",
            TEXT_ISEMPTY_HELPURL: "https://githubcom/google/blockly/wiki/Text#checking-for-empty-text",
            TEXT_ISEMPTY_TITLE: "%1 が空",
            TEXT_ISEMPTY_TOOLTIP: "指定されたテキストが空の場合は、true を返します。",
            TEXT_JOIN_HELPURL: "https://githubcom/google/blockly/wiki/Text#text-creation",
            TEXT_JOIN_TITLE_CREATEWITH: "テキストを作成します。",
            TEXT_JOIN_TOOLTIP: "任意の数の項目一部を一緒に接合してテキストの作成します。",
            TEXT_LENGTH_HELPURL: "https://githubcom/google/blockly/wiki/Text#text-modification",
            TEXT_LENGTH_TITLE: "%1 の長さ",
            TEXT_LENGTH_TOOLTIP: "指定されたテキストの文字 (スペースを含む) の数を返します。",
            TEXT_PRINT_HELPURL: "https://githubcom/google/blockly/wiki/Text#printing-text",
            TEXT_PRINT_TITLE: "%1 を印刷します。",
            TEXT_PRINT_TOOLTIP: "指定したテキスト、番号または他の値を印刷します。",
            TEXT_PROMPT_HELPURL: "https://githubcom/google/blockly/wiki/Text#getting-input-from-the-user",
            TEXT_PROMPT_TOOLTIP_NUMBER: "ユーザーにプロンプトで数字のインプットを求めます",
            TEXT_PROMPT_TOOLTIP_TEXT: "ユーザーにプロンプトでテキストのインプットを求めます",
            TEXT_PROMPT_TYPE_NUMBER: "プロンプトで数字の入力を求める",
            TEXT_PROMPT_TYPE_TEXT: "プロンプトでテキストの入力を求める",
            TEXT_TEXT_HELPURL: "https://jawikipediaorg/wiki/文字列",
            TEXT_TEXT_TOOLTIP: "文字、単語、または行のテキスト。",
            TEXT_TRIM_HELPURL: "https://githubcom/google/blockly/wiki/Text#trimming-removing-spaces",
            TEXT_TRIM_OPERATOR_BOTH: "両端のスペースを取り除く",
            TEXT_TRIM_OPERATOR_LEFT: "左端のスペースを取り除く",
            TEXT_TRIM_OPERATOR_RIGHT: "右端のスペースを取り除く",
            TEXT_TRIM_TOOLTIP: "スペースを 1 つまたは両方の端から削除したのち、テキストのコピーを返します。",
            VARIABLES_DEFAULT_NAME: "項目",
            VARIABLES_GET_CREATE_SET: "'セット%1を作成します。",
            VARIABLES_GET_HELPURL: "https://githubcom/google/blockly/wiki/Variables#get",
            VARIABLES_GET_TOOLTIP: "この変数の値を返します。",
            VARIABLES_SET: "セット %1 宛先 %2",
            VARIABLES_SET_CREATE_GET: "'%1 を取得' を作成します。",
            VARIABLES_SET_HELPURL: "https://githubcom/google/blockly/wiki/Variables#set",
            VARIABLES_SET_TOOLTIP: "この入力を変数と等しくなるように設定します。",
            VIEWS_MAIN_MENU_VIEW_LOAD_ERROR: "{$filename}{$error}",
            VIEWS_MAIN_MENU_VIEW_LOAD_SUCCEEDED: "ロードしました"
        }
    });

    Bridge.define("WebMrbc.Block", {
        type: null,
        ctor: function (type) {
            this.$initialize();
            this.type = type;
        }
    });

    Bridge.define("WebMrbc.App", {
        statics: {
            module: null,
            term: null,
            preferences: null,
            changedAfterTranslating: false,
            translating: false,
            classGroups: null,
            nodeProfileClass: null,
            config: {
                init: function () {
                    this.preferences = new (System.Collections.Generic.Dictionary$2(String,Object))();
                    Bridge.ready(this.main);
                }
            },
            initModule: function () {
                var module = new WebMrbc.EmModule(WebMrbc.App.term);

                window.onerror = function (e) {
                    var spinnerElement = document.getElementById("spinner");
                    // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
                    module.setStatus("Exception thrown, see JavaScript console");
                    spinnerElement.style.display = "none";
                    module.setStatus = function (text) {
                        if (!System.String.isNullOrEmpty(text)) {
                            module.printErr([System.String.concat("[post-exception status] ", text)]);
                        }
                    };
                };

                return module;
            },
            preRun: function () {
                var FS = WebMrbc.App.module.getFileSystem();

                FS.createFolder("/", "src", true, false);
                FS.createPreloadedFile("/src", "main.org.rb", "src/main.rb", true, true);
                FS.createFolder("/", "build", true, true);

                FS.writeFile("/src/main.rb", window["textEditor"].getValue());
            },
            main: function () {
                Number.isFinite = Number.isFinite || function(any) { return typeof any === 'number' && isFinite(any); };
                Number.isNaN = Number.isNaN || function(any) { return typeof any === 'number' && isNaN(any); };

                WebMrbc.Collections.ClassWorkspaces = new (WebMrbc.Collection$1(WebMrbc.IClassWorkspace))();
                WebMrbc.Views.MainMenuView = new WebMrbc.MainMenuView();
                WebMrbc.Views.ClassSelectorView = new WebMrbc.ClassSelectorView(WebMrbc.Collections.ClassWorkspaces);
                WebMrbc.Views.EObjectModalView = new WebMrbc.EObjectModalView();
                Blockly.Blocks["colour_picker"] = new WebMrbc.ColourPickerBlock("colour_picker");
                Blockly.Blocks["colour_random"] = new WebMrbc.ColourRandomBlock("colour_random");
                Blockly.Blocks["colour_rgb"] = new WebMrbc.ColourRGBBlock("colour_rgb");
                Blockly.Blocks["colour_blend"] = new WebMrbc.ColourBlendBlock("colour_blend");
                Blockly.Blocks["lists_create_empty"] = new WebMrbc.ListsCreateEmptyBlock("lists_create_empty");
                Blockly.Blocks["lists_create_with"] = new WebMrbc.ListsCreateWithBlock("lists_create_with");
                Blockly.Blocks["lists_create_with_container"] = new WebMrbc.ListsCreateWithContainerBlock("lists_create_with_container");
                Blockly.Blocks["lists_create_with_item"] = new WebMrbc.ListsCreateWithItemBlock("lists_create_with_item");
                Blockly.Blocks["lists_repeat"] = new WebMrbc.ListsRepeatBlock("lists_repeat");
                Blockly.Blocks["lists_length"] = new WebMrbc.ListsLengthBlock("lists_length");
                Blockly.Blocks["lists_isEmpty"] = new WebMrbc.ListsIsEmptyBlock("lists_isEmpty");
                Blockly.Blocks["lists_indexOf"] = new WebMrbc.ListsIndexOfBlock("lists_indexOf");
                Blockly.Blocks["lists_getIndex"] = new WebMrbc.ListsGetIndexBlock("lists_getIndex");
                Blockly.Blocks["lists_setIndex"] = new WebMrbc.ListsSetIndexBlock("lists_setIndex");
                Blockly.Blocks["lists_getSublist"] = new WebMrbc.ListsGetSublistBlock("lists_getSublist");
                Blockly.Blocks["lists_sort"] = new WebMrbc.ListsSortBlock("lists_sort");
                Blockly.Blocks["lists_split"] = new WebMrbc.ListsSplitBlock("lists_split");
                Blockly.Blocks["controls_if"] = new WebMrbc.ControlsIfBlock("controls_if");
                Blockly.Blocks["controls_if_if"] = new WebMrbc.ControlsIfIfBlock("controls_if_if");
                Blockly.Blocks["controls_if_elseif"] = new WebMrbc.ControlsIfElseIfBlock("controls_if_elseif");
                Blockly.Blocks["controls_if_else"] = new WebMrbc.ControlsIfElseBlock("controls_if_else");
                Blockly.Blocks["switch_case_number"] = new WebMrbc.SwitchCaseNumberBlock("switch_case_number");
                Blockly.Blocks["switch_case_number_first_case"] = new WebMrbc.SwitchCaseNumberFirstCaseBlock("switch_case_number_first_case");
                Blockly.Blocks["switch_case_number_case"] = new WebMrbc.SwitchCaseNumberCaseBlock("switch_case_number_case");
                Blockly.Blocks["switch_case_number_default"] = new WebMrbc.SwitchCaseNumberDefaultBlock("switch_case_number_default");
                Blockly.Blocks["switch_case_text"] = new WebMrbc.SwitchCaseTextBlock("switch_case_text");
                Blockly.Blocks["switch_case_text_first_case"] = new WebMrbc.SwitchCaseTextFirstCaseBlock("switch_case_text_first_case");
                Blockly.Blocks["switch_case_text_case"] = new WebMrbc.SwitchCaseTextCaseBlock("switch_case_text_case");
                Blockly.Blocks["switch_case_text_default"] = new WebMrbc.SwitchCaseTextDefaultBlock("switch_case_text_default");
                Blockly.Blocks["logic_compare"] = new WebMrbc.LogicCompareBlock("logic_compare");
                Blockly.Blocks["logic_operation"] = new WebMrbc.LogicOperationBlock("logic_operation");
                Blockly.Blocks["logic_negate"] = new WebMrbc.LogicNegateBlock("logic_negate");
                Blockly.Blocks["logic_boolean"] = new WebMrbc.LogicBooleanBlock("logic_boolean");
                Blockly.Blocks["logic_null"] = new WebMrbc.LogicNullBlock("logic_null");
                Blockly.Blocks["logic_ternary"] = new WebMrbc.LogicTernaryBlock("logic_ternary");
                Blockly.Blocks["controls_repeat_ext"] = new WebMrbc.ControlsRepeatExtBlock("controls_repeat_ext");
                Blockly.Blocks["controls_repeat"] = new WebMrbc.ControlsRepeatBlock("controls_repeat");
                Blockly.Blocks["controls_whileUntil"] = new WebMrbc.ControlsWhileUntilBlock("controls_whileUntil");
                Blockly.Blocks["controls_for"] = new WebMrbc.ControlsForBlock("controls_for");
                Blockly.Blocks["controls_forEach"] = new WebMrbc.ControlsForEachBlock("controls_forEach");
                Blockly.Blocks["controls_flow_statements"] = new WebMrbc.ControlsFlowStatementsBlock("controls_flow_statements");
                Blockly.Blocks["math_number"] = new WebMrbc.MathNumberBlock("math_number");
                Blockly.Blocks["math_arithmetic"] = new WebMrbc.MathArithmeticBlock("math_arithmetic");
                Blockly.Blocks["math_single"] = new WebMrbc.MathSingleBlock("math_single");
                Blockly.Blocks["math_trig"] = new WebMrbc.MathTrigBlock("math_trig");
                Blockly.Blocks["math_constant"] = new WebMrbc.MathConstantBlock("math_constant");
                Blockly.Blocks["math_number_property"] = new WebMrbc.MathNumberPropertyBlock("math_number_property");
                Blockly.Blocks["math_change"] = new WebMrbc.MathChangeBlock("math_change");
                Blockly.Blocks["math_round"] = new WebMrbc.MathRoundBlock("math_round");
                Blockly.Blocks["math_on_list"] = new WebMrbc.MathOnListBlock("math_on_list");
                Blockly.Blocks["math_modulo"] = new WebMrbc.MathModuloBlock("math_modulo");
                Blockly.Blocks["math_constrain"] = new WebMrbc.MathConstrainBlock("math_constrain");
                Blockly.Blocks["math_random_int"] = new WebMrbc.MathRandomIntBlock("math_random_int");
                Blockly.Blocks["math_random_float"] = new WebMrbc.MathRandomFloatBlock("math_random_float");
                Blockly.Blocks["procedures_defnoreturn"] = new WebMrbc.ProceduresDefnoreturnBlock("procedures_defnoreturn");
                Blockly.Blocks["procedures_defreturn"] = new WebMrbc.ProceduresDefreturnBlock("procedures_defreturn");
                Blockly.Blocks["procedures_mutatorcontainer"] = new WebMrbc.ProceduresMutatorcontainerBlock("procedures_mutatorcontainer");
                Blockly.Blocks["procedures_mutatorarg"] = new WebMrbc.ProceduresMutatorargBlock("procedures_mutatorarg");
                Blockly.Blocks["procedures_callnoreturn"] = new WebMrbc.ProceduresCallnoreturnBlock("procedures_callnoreturn");
                Blockly.Blocks["procedures_callreturn"] = new WebMrbc.ProceduresCallreturnBlock("procedures_callreturn");
                Blockly.Blocks["procedures_ifreturn"] = new WebMrbc.ProceduresIfreturnBlock("procedures_ifreturn");
                Blockly.Blocks["text"] = new WebMrbc.TextBlock("text");
                Blockly.Blocks["text_join"] = new WebMrbc.TextJoinBlock("text_join");
                Blockly.Blocks["text_create_join_container"] = new WebMrbc.TextCreateJoinContainerBlock("text_create_join_container");
                Blockly.Blocks["text_create_join_item"] = new WebMrbc.TextCreateJoinItemBlock("text_create_join_item");
                Blockly.Blocks["text_append"] = new WebMrbc.TextAppendBlock("text_append");
                Blockly.Blocks["text_length"] = new WebMrbc.TextLengthBlock("text_length");
                Blockly.Blocks["text_isEmpty"] = new WebMrbc.TextIsEmptyBlock("text_isEmpty");
                Blockly.Blocks["text_indexOf"] = new WebMrbc.TextIndexOfBlock("text_indexOf");
                Blockly.Blocks["text_charAt"] = new WebMrbc.TextCharAtBlock("text_charAt");
                Blockly.Blocks["text_getSubstring"] = new WebMrbc.TextGetSubstringBlock("text_getSubstring");
                Blockly.Blocks["text_changeCase"] = new WebMrbc.TextChangeCaseBlock("text_changeCase");
                Blockly.Blocks["text_trim"] = new WebMrbc.TextTrimBlock("text_trim");
                Blockly.Blocks["text_print"] = new WebMrbc.TextPrintBlock("text_print");
                Blockly.Blocks["text_prompt_ext"] = new WebMrbc.TextPromptExtBlock("text_prompt_ext");
                Blockly.Blocks["text_prompt"] = new WebMrbc.TextPromptBlock("text_prompt");
                Blockly.Blocks["variables_get"] = new WebMrbc.VariablesGetBlock("variables_get");
                Blockly.Blocks["variables_set"] = new WebMrbc.VariablesSetBlock("variables_set");
                Blockly.Blocks["eproperty_new"] = new WebMrbc.EPropertyBlock("eproperty_new");
                Blockly.Blocks["property_attribute"] = new WebMrbc.EcnlPropertyAttributeBlock("property_attribute");
                Blockly.Blocks["service_code"] = new WebMrbc.EcnlServiceCodeBlock("service_code");
                Blockly.Blocks["node_id"] = new WebMrbc.EcnlNodeIDBlock("node_id");
                Blockly.Blocks["save_received_property"] = new WebMrbc.EcnlSaveReceivedPropertyBlock("save_received_property");
                Blockly.Blocks["get_saved_property"] = new WebMrbc.EcnlGetSavedPropertyBlock("get_saved_property");
                Blockly.Blocks["get_property_info"] = new WebMrbc.EcnlGetPropertyInfoBlock("get_property_info");
                Blockly.Blocks["set_announce_request"] = new WebMrbc.EcnlSetAnnounceRequestBlock("set_announce_request");
                Blockly.Blocks["data_to_number"] = new WebMrbc.EcnlDataToNumberBlock("data_to_number");
                Blockly.Blocks["number_to_data"] = new WebMrbc.EcnlNumberToDataBlock("number_to_data");
                Blockly.Blocks["no_op"] = new WebMrbc.EcnlNoOpBlock("no_op");
                Blockly.Blocks["received_data"] = new WebMrbc.EcnlReceivedDataBlock("received_data");
                Blockly.Blocks["received_data_size"] = new WebMrbc.EcnlReceivedDataSizeBlock("received_data_size");
                Blockly.Blocks["data_join"] = new WebMrbc.DataJoinBlock("data_join");
                Blockly.Blocks["data_create_join_container"] = new WebMrbc.DataCreateJoinContainerBlock("data_create_join_container");
                Blockly.Blocks["data_create_join_item"] = new WebMrbc.DataCreateJoinItemBlock("data_create_join_item");
                Blockly.Blocks["create_esv_get"] = new WebMrbc.CreateEsvGetBlock("create_esv_get");
                Blockly.Blocks["create_esv_set"] = new WebMrbc.CreateEsvSetBlock("create_esv_set");
                Blockly.Blocks["esv_add_edt"] = new WebMrbc.EsvAddEdtBlock("esv_add_edt");
                Blockly.Blocks["esv_add_epc"] = new WebMrbc.EsvAddEpcBlock("esv_add_epc");
                Blockly.Blocks["send_esv"] = new WebMrbc.SendEsvBlock("send_esv");
                Blockly.Blocks["release_esv"] = new WebMrbc.ReleaseEsvBlock("release_esv");
                Blockly.Blocks["notify_initial_esv"] = new WebMrbc.NotifyInitialEsvBlock("notify_initial_esv");
                Blockly.Blocks["esv_get_esv"] = new WebMrbc.EsvGetEsvBlock("esv_get_esv");
                Blockly.Blocks["esv_iterate"] = new WebMrbc.EsvIterateBlock("esv_iterate");
                Blockly.Blocks["esv_iterator"] = new WebMrbc.EsvIteratorBlock("esv_iterator");
                Blockly.Blocks["svctask_set_timer"] = new WebMrbc.SvctaskSetTimer("svctask_set_timer");
                Blockly.Blocks["svctask_timer"] = new WebMrbc.SvctaskTimerBlock("svctask_timer");
                Blockly.Blocks["svctask_progress"] = new WebMrbc.SvctaskProgressBlock("svctask_progress");
                Blockly.Blocks["svctask_recv_msg"] = new WebMrbc.SvctaskRecvMsgBlock("svctask_recv_msg");
                Blockly.Blocks["svctask_call_timeout"] = new WebMrbc.SvctaskCallTimeoutBlock("svctask_call_timeout");
                Blockly.Blocks["svctask_is_match"] = new WebMrbc.SvctaskIsMatchBlock("svctask_is_match");
                Blockly.Blocks["call"] = new WebMrbc.CallBlock("call");
                Blockly.Blocks["pin_mode"] = new WebMrbc.PinModeBlock("pin_mode");
                Blockly.Blocks["digital_write"] = new WebMrbc.DigitalWriteBlock("digital_write");
                Blockly.Blocks["digital_read"] = new WebMrbc.DigitalReadBlock("digital_read");
                Blockly.Blocks["analog_read"] = new WebMrbc.AnalogReadBlock("analog_read");
                Blockly.Blocks["pwm"] = new WebMrbc.PwmBlock("pwm");
                Blockly.Blocks["pwm_value"] = new WebMrbc.PwmValueBlock("pwm_value");
                Blockly.Blocks["analog_reference"] = new WebMrbc.AnalogReferenceBlock("analog_reference");
                Blockly.Blocks["init_dac"] = new WebMrbc.InitDacBlock("init_dac");
                Blockly.Blocks["analog_dac"] = new WebMrbc.AnalogDacBlock("analog_dac");
                Blockly.Blocks["dac_value"] = new WebMrbc.DacValueBlock("dac_value");
                Blockly.Blocks["delay"] = new WebMrbc.DelayBlock("delay");
                Blockly.Blocks["millis"] = new WebMrbc.MillisBlock("millis");
                Blockly.Blocks["micros"] = new WebMrbc.MicrosBlock("micros");
                Blockly.Blocks["led"] = new WebMrbc.LedBlock("led");
                Blockly.Blocks["bit"] = new WebMrbc.BitBlock("bit");
                Blockly.Blocks["tone"] = new WebMrbc.ToneBlock("tone");
                Blockly.Blocks["tone_value"] = new WebMrbc.ToneValueBlock("tone_value");
                Blockly.Blocks["no_tone"] = new WebMrbc.NoToneBlock("no_tone");
                Blockly.Blocks["random_seed"] = new WebMrbc.RandomSeedBlock("random_seed");
                Blockly.Blocks["random"] = new WebMrbc.RandomBlock("random");
                Blockly.Blocks["i2c_new"] = new WebMrbc.I2cNewBlock("i2c_new");
                Blockly.Blocks["i2c_write"] = new WebMrbc.I2cWriteBlock("i2c_write");
                Blockly.Blocks["i2c_read"] = new WebMrbc.I2cReadBlock("i2c_read");
                Blockly.Blocks["i2c_begin"] = new WebMrbc.I2cBeginBlock("i2c_begin");
                Blockly.Blocks["i2c_lwrite"] = new WebMrbc.I2cLwriteBlock("i2c_lwrite");
                Blockly.Blocks["i2c_end"] = new WebMrbc.I2cEndBlock("i2c_end");
                Blockly.Blocks["i2c_request"] = new WebMrbc.I2cRequestBlock("i2c_request");
                Blockly.Blocks["i2c_lread"] = new WebMrbc.I2cLreadBlock("i2c_lread");
                Blockly.Blocks["i2c_available"] = new WebMrbc.I2cAvailableBlock("i2c_available");
                Blockly.Blocks["i2c_frequency"] = new WebMrbc.I2cFrequencyBlock("i2c_frequency");
                Blockly.Blocks["memfile_open"] = new WebMrbc.MemFileOpenBlock("memfile_open");
                Blockly.Blocks["memfile_close"] = new WebMrbc.MemFileCloseBlock("memfile_close");
                Blockly.Blocks["memfile_read"] = new WebMrbc.MemFileReadBlock("memfile_read");
                Blockly.Blocks["memfile_write"] = new WebMrbc.MemFileWriteBlock("memfile_write");
                Blockly.Blocks["memfile_seek"] = new WebMrbc.MemFileSeekBlock("memfile_seek");
                Blockly.Blocks["memfile_cp"] = new WebMrbc.MemFileCpBlock("memfile_cp");
                Blockly.Blocks["memfile_rm"] = new WebMrbc.MemFileRmBlock("memfile_rm");
                Blockly.Blocks["rtc_year"] = new WebMrbc.RtcYearBlock("rtc_year");
                Blockly.Blocks["rtc_month"] = new WebMrbc.RtcMonthBlock("rtc_month");
                Blockly.Blocks["rtc_day"] = new WebMrbc.RtcDayBlock("rtc_day");
                Blockly.Blocks["rtc_hour"] = new WebMrbc.RtcHourBlock("rtc_hour");
                Blockly.Blocks["rtc_minute"] = new WebMrbc.RtcMinuteBlock("rtc_minute");
                Blockly.Blocks["rtc_second"] = new WebMrbc.RtcSecondBlock("rtc_second");
                Blockly.Blocks["rtc_weekday"] = new WebMrbc.RtcWeekDayBlock("rtc_weekday");
                Blockly.Blocks["rtc_datetime"] = new WebMrbc.RtcDateTimeBlock("rtc_datetime");
                Blockly.Blocks["rtc_get_datetime_item"] = new WebMrbc.RtcDateTimeItemBlock("rtc_get_datetime_item");
                Blockly.Blocks["rtc_set_datetime_item"] = new WebMrbc.RtcSetDateTimeItemBlock("rtc_set_datetime_item");
                Blockly.Blocks["rtc_gettime"] = new WebMrbc.RtcGetTimeBlock("rtc_gettime");
                Blockly.Blocks["rtc_settime"] = new WebMrbc.RtcSettimeBlock("rtc_settime");
                Blockly.Blocks["rtc_deinit"] = new WebMrbc.RtcDeinitBlock("rtc_deinit");
                Blockly.Blocks["rtc_init"] = new WebMrbc.RtcInitBlock("rtc_init");
                Blockly.Blocks["sd_exists"] = new WebMrbc.SdExistsBlock("sd_exists");
                Blockly.Blocks["sd_mkdir"] = new WebMrbc.SdMkdirBlock("sd_mkdir");
                Blockly.Blocks["sd_remove"] = new WebMrbc.SdRemoveBlock("sd_remove");
                Blockly.Blocks["sd_copy"] = new WebMrbc.SdCopyBlock("sd_copy");
                Blockly.Blocks["sd_rmdir"] = new WebMrbc.SdRmdirBlock("sd_rmdir");
                Blockly.Blocks["sd_open"] = new WebMrbc.SdOpenBlock("sd_open");
                Blockly.Blocks["sd_close"] = new WebMrbc.SdCloseBlock("sd_close");
                Blockly.Blocks["sd_read"] = new WebMrbc.SdReadBlock("sd_read");
                Blockly.Blocks["sd_seek"] = new WebMrbc.SdSeekBlock("sd_seek");
                Blockly.Blocks["sd_write"] = new WebMrbc.SdWriteBlock("sd_write");
                Blockly.Blocks["sd_flush"] = new WebMrbc.SdFlushBlock("sd_flush");
                Blockly.Blocks["sd_size"] = new WebMrbc.SdSizeBlock("sd_size");
                Blockly.Blocks["sd_position"] = new WebMrbc.SdPositionBlock("sd_position");
                Blockly.Blocks["bps_value"] = new WebMrbc.BpsValueBlock("bps_value");
                Blockly.Blocks["serial_new"] = new WebMrbc.SerialNewBlock("serial_new");
                Blockly.Blocks["serial_bps"] = new WebMrbc.SerialBpsBlock("serial_bps");
                Blockly.Blocks["serial_print"] = new WebMrbc.SerialPrintBlock("serial_print");
                Blockly.Blocks["serial_println"] = new WebMrbc.SerialPrintlnBlock("serial_println");
                Blockly.Blocks["serial_available"] = new WebMrbc.SerialAvailableBlock("serial_available");
                Blockly.Blocks["serial_read"] = new WebMrbc.SerialReadBlock("serial_read");
                Blockly.Blocks["serial_write"] = new WebMrbc.SerialWriteBlock("serial_write");
                Blockly.Blocks["serial_flash"] = new WebMrbc.SerialFlashBlock("serial_flash");
                Blockly.Blocks["servo_attach"] = new WebMrbc.ServoAttachBlock("servo_attach");
                Blockly.Blocks["servo_write"] = new WebMrbc.ServoWriteBlock("servo_write");
                Blockly.Blocks["servo_angle"] = new WebMrbc.ServoAngleBlock("servo_angle");
                Blockly.Blocks["servo_us"] = new WebMrbc.ServoUsBlock("servo_us");
                Blockly.Blocks["servo_us_value"] = new WebMrbc.ServoUsValueBlock("servo_us_value");
                Blockly.Blocks["servo_read"] = new WebMrbc.ServoReadBlock("servo_read");
                Blockly.Blocks["servo_attached"] = new WebMrbc.ServoAttachedBlock("servo_attached");
                Blockly.Blocks["servo_detach"] = new WebMrbc.ServoDetachBlock("servo_detach");
                Blockly.Blocks["system_exit"] = new WebMrbc.SystemExitBlock("system_exit");
                Blockly.Blocks["system_setrun"] = new WebMrbc.SystemSetRunBlock("system_setrun");
                Blockly.Blocks["system_version"] = new WebMrbc.SystemVersionBlock("system_version");
                Blockly.Blocks["system_push"] = new WebMrbc.SystemPushBlock("system_push");
                Blockly.Blocks["system_pop"] = new WebMrbc.SystemPopBlock("system_pop");
                Blockly.Blocks["system_fileload"] = new WebMrbc.SystemFileLoadBlock("system_fileload");
                Blockly.Blocks["system_reset"] = new WebMrbc.SystemResetBlock("system_reset");
                Blockly.Blocks["system_use_sd"] = new WebMrbc.SystemUseSdBlock("system_use_sd");
                Blockly.Blocks["system_use_wifi"] = new WebMrbc.SystemUseWifiBlock("system_use_wifi");
                Blockly.Blocks["system_get_mrb_path"] = new WebMrbc.SystemGetMrbPathBlock("system_get_mrb_path");
                Blockly.Blocks["hexadecimal"] = new WebMrbc.HexadecimalBlock("hexadecimal");
                Blockly.Ruby = new WebMrbc.Ruby();

                var termElement = document.getElementById("term");
                WebMrbc.App.term = new Terminal(new $_.$AnonymousType$1(80, 24, true, true, false));
                WebMrbc.App.term.on("data", $_.WebMrbc.App.f1);
                WebMrbc.App.term.on("title", $_.WebMrbc.App.f2);

                WebMrbc.App.term.open(termElement);

                Blockly.HSV_SATURATION = 1.0;
                Blockly.HSV_VALUE = 0.8;
                Blockly.mainWorkspace = Blockly.inject("blockly-div", new $_.$AnonymousType$2(document.getElementById("toolbox"), true));

                WebMrbc.App.hideEmptyCategory();

                Blockly.mainWorkspace.addChangeListener(WebMrbc.App.workspace_Changed);

                var textEditor = ace.edit("text-editor");
                window["textEditor"] = textEditor;
                textEditor.setTheme("ace/theme/vibrant_ink");
                textEditor.setShowInvisibles(true);
                textEditor.gotoLine(0, 0);
                textEditor.on("change", $_.WebMrbc.App.f3);
                var session = textEditor.getSession();
                session.setMode("ace/mode/ruby");
                session.setTabSize(2);
                session.setUseSoftTabs(false);

                WebMrbc.App.applyPreferences();

                var statusElement = document.getElementById("status");
                var progressElement = document.getElementById("progress");
                var spinnerElement = document.getElementById("spinner");

                statusElement.innerHTML = "Downloading...";
                var xhr = new XMLHttpRequest();
                xhr.onload = function (e) {
                    window["textEditor"].setValue(xhr.responseText);
                    textEditor.moveCursorTo(0, 0);
                };
                xhr.open("GET", "src/main.rb", true);
                xhr.send(null);

                statusElement.innerHTML = "";
                spinnerElement.style.display = "none";

                WebMrbc.Collections.MainLoopWorkspace = new WebMrbc.MainLoopWorkspace("MainLoop");
                WebMrbc.Collections.ClassWorkspaces.add(WebMrbc.Collections.MainLoopWorkspace);
                WebMrbc.Collections.EcnlTaskWorkspace = new WebMrbc.EcnlTaskWorkspace("EchonetTask");
                WebMrbc.Collections.ClassWorkspaces.add(WebMrbc.Collections.EcnlTaskWorkspace);

                $($_.WebMrbc.App.f4);
            },
            workspace_Changed: function (e) {
                WebMrbc.App.changedAfterTranslating = true;
                window["changed"] = true;

                var block = Blockly.mainWorkspace.getBlockById(e.blockId);
                var eobject = Bridge.as(WebMrbc.Views.ClassSelectorView.getCurrent(), WebMrbc.EObjectWorkspace);

                switch (e.type) {
                    case Blockly.Events.CREATE: 
                        var cre = e;
                        if (Bridge.referenceEquals(block.type, "eproperty_new")) {
                            var propertyBlock = block;
                            propertyBlock.onCreate(eobject, cre);
                        }
                        break;
                    case Blockly.Events.DELETE: 
                        var del = e;
                        if ((block != null) && (Bridge.referenceEquals(block.type, "eproperty_new"))) {
                            var propertyBlock1 = block;
                            propertyBlock1.onDelete(eobject, del);
                        }
                        break;
                    case Blockly.Events.CHANGE: 
                        var chg = e;
                        if (Bridge.referenceEquals(block.type, "eproperty_new")) {
                            var propertyBlock2 = block;
                            propertyBlock2.onChange(eobject, chg);
                        }
                        break;
                    case Blockly.Events.MOVE: 
                        var mov = e;
                        if ((block != null) && (Bridge.referenceEquals(block.type, "eproperty_new"))) {
                            var propertyBlock3 = block;
                            propertyBlock3.onMove(eobject, mov);
                        }
                        break;
                    case Blockly.Events.UI: 
                        var ui = e;
                        WebMrbc.App.onUi(ui);
                        break;
                }
            },
            onUi: function (ui) {
                switch (ui.element) {
                    case "selected": 
                        if (ui.newValue != null) {
                            var block = Blockly.mainWorkspace.getBlockById(ui.newValue.toString());
                        }
                        break;
                    case "category": 
                        break;
                    case "click": 
                        break;
                    case "commentOpen": 
                        break;
                    case "mutatorOpen": 
                        break;
                    case "warningOpen": 
                        break;
                }
            },
            initClassGroups: function (ele) {
                $.ajax({ url: "devices/ClassGroupList.json", success: function (data, textStatus, request) {
                    var $t;
                    var profileClass = null;
                    var _classGroups = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data), String)) ? $.parseJSON(Bridge.cast(data, String)) : data), Array);
                    var classGroups = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_classGroups);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonClassGroupInfo(_item);
                        classGroups.push(item);
                        if (item.classGroupCode === 14) {
                            profileClass = item;
                            continue;
                        } else if (item.classGroupCode === 15) {
                            continue;
                        }
                    }
                    WebMrbc.App.classGroups = classGroups;

                    WebMrbc.Views.EObjectModalView.initClassGroups();

                    if (profileClass != null) {
                        WebMrbc.App.updateClass(profileClass, $_.WebMrbc.App.f6);
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            updateClass: function (eclass, success) {
                if (success === void 0) { success = null; }
                $.ajax({ url: System.String.concat(System.String.concat("devices/ClassList", System.Byte.format(eclass.classGroupCode, "X2").toUpperCase()), ".json"), success: function (data1, textStatus1, request1) {
                    var $t;
                    var _classes = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data1), String)) ? $.parseJSON(Bridge.cast(data1, String)) : data1), Array);
                    var classes = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_classes);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonClassInfo(_item);
                        classes.push(item);
                        item.classGroup = eclass;
                        if (item.classCode === 240) {
                            WebMrbc.App.nodeProfileClass = item;
                        }
                    }
                    eclass.classes = classes;

                    if (!Bridge.staticEquals(success, null)) {
                        success();
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            updateProperties: function (eclass, success) {
                if (success === void 0) { success = null; }
                $.ajax({ url: System.String.concat(System.String.concat(System.String.concat("devices/PropertyList", System.Byte.format(eclass.classGroup.classGroupCode, "X2").toUpperCase()), System.Byte.format(eclass.classCode, "X2").toUpperCase()), ".json"), success: function (data, textStatus, request) {
                    var $t;
                    var _properties = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data), String)) ? $.parseJSON(Bridge.cast(data, String)) : data), Array);
                    var properties = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_properties);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonPropertyInfo.$ctor1(_item);
                        properties.push(item);
                    }
                    eclass.properties = properties;

                    if (!Bridge.staticEquals(success, null)) {
                        success();
                    }
                }, error: function (data, textStatus, request) {
                    WebMrbc.App.updateDefaultProperties(eclass, success);
                } });
            },
            updateDefaultProperties: function (eclass, success) {
                if (success === void 0) { success = null; }
                $.ajax({ url: "devices/PropertyListBase.json", success: function (data, textStatus, request) {
                    var $t;
                    var _properties = Bridge.cast(((Bridge.referenceEquals(Bridge.getType(data), String)) ? $.parseJSON(Bridge.cast(data, String)) : data), Array);
                    var properties = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(_properties);
                    while ($t.moveNext()) {
                        var _item = $t.getCurrent();
                        var item = new WebMrbc.JsonPropertyInfo.$ctor1(_item);
                        properties.push(item);
                    }
                    eclass.properties = properties;

                    if (!Bridge.staticEquals(success, null)) {
                        success();
                    }
                }, error: WebMrbc.App.ajaxError });
            },
            ajaxError: function (request, textStatus, error) {
            },
            loadXml: function (data, workspace) {
                if (workspace === void 0) { workspace = null; }
                var xmlChild;
                if (workspace == null) {
                    workspace = Blockly.mainWorkspace;
                }
                var xml = Blockly.Xml.textToDom(data);
                workspace.clear();
                var eobjs = System.Array.init(0, null);
                for (var i = 0; ((xmlChild = Bridge.cast(xml.childNodes[i], Element))) != null; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals("eobject", xmlChild.nodeName.toLowerCase())) {
                        var type = WebMrbc.App.getClass(parseInt(xmlChild.getAttribute("classGroupCode")), parseInt(xmlChild.getAttribute("classCode"), 10));
                        if (type == null) {
                            continue;
                        }

                        var c = Bridge.merge(new WebMrbc.JsonObjectInfo(type, xmlChild.getAttribute("identifier")), {
                            attribute: xmlChild.getAttribute("attribute"),
                            instanceCode: ((parseInt(xmlChild.getAttribute("instanceCode"))) & 255),
                            properties: WebMrbc.App.getProperties(type, xmlChild.getAttribute("propertys").split(","))
                        } );
                        eobjs.push(new WebMrbc.EObjectWorkspace(c));
                    }
                }
                WebMrbc.Collections.ClassWorkspaces.reset$1(eobjs);
                Blockly.Xml.domToWorkspace(xml, workspace);
            },
            getClass: function (classGroupCode, classCode) {
                var t = System.Linq.Enumerable.from(WebMrbc.App.classGroups).firstOrDefault(function (cg) {
                    return cg.classGroupCode === classGroupCode;
                }, null);
                if (t == null) {
                    return null;
                }
                return System.Linq.Enumerable.from(t.classes).firstOrDefault(function (c) {
                    return c.classCode === classCode;
                }, null);
            },
            getProperties: function (type, properties) {
                var pcs = System.Linq.Enumerable.from(properties).select($_.WebMrbc.App.f7);
                var ps = System.Linq.Enumerable.from(type.properties).where(function (p) {
                    return pcs.contains(p.propertyCode);
                });
                return ps.toArray();
            },
            dumpXml: function (workspace, models) {
                if (workspace == null) {
                    workspace = Blockly.mainWorkspace;
                }
                if (models == null) {
                    models = WebMrbc.Collections.ClassWorkspaces;
                }
                var xmlDom = Blockly.Xml.workspaceToDom(workspace);
                var blocklyDom = xmlDom.firstChild;
                models.each(function (c) {
                    var e = goog.dom.createDom("eobject");
                    e.setAttribute("x", c.get("x"));
                    e.setAttribute("y", c.get("y"));
                    e.setAttribute("name", c.get("name"));
                    e.setAttribute("epropertys", c.epropertysWithName().join(","));
                    var epropertyIndex = c.get("epropertyIndex");
                    if (!Bridge.referenceEquals(epropertyIndex, 0)) {
                        e.setAttribute("eproperty_index", epropertyIndex);
                    }
                    e.setAttribute("attribute", c.get("attribute"));
                    var rotationStyle = c.get("rotationStyle");
                    if (!Bridge.referenceEquals(rotationStyle, "free")) {
                        e.setAttribute("rotation_style", rotationStyle);
                    }
                    xmlDom.insertBefore(e, blocklyDom);
                });
                return Blockly.Xml.domToPrettyText(xmlDom);
            },
            /**
             * テキスト入力欄のEnter(Return)キーを無視する
             *
             * @static
             * @private
             * @this WebMrbc.App
             * @memberof WebMrbc.App
             * @param   {$}    el
             * @return  {$}
             */
            ignoreEnterKey: function (el) {
                return el.find("input[type=text]").keypress($_.WebMrbc.App.f8);
            },
            removeBackdropOnHidden: function (el) {
                return el.on("hidden", $_.WebMrbc.App.f9);
            },
            reset: function () {
                Blockly.mainWorkspace.clear();
                WebMrbc.Collections.ClassWorkspaces.reset();
                $("#filename").val("");
                window["textEditor"].getSession().getDocument().setValue("");
                window["textEditor"].moveCursorTo(0, 0);
                WebMrbc.App.addEObjectFromBeginning();
                window["changed"] = false;
            },
            addEObjectFromBeginning: function () {
                var $t;
                if (!WebMrbc.App.isEnabled("disabled_add_eobject_from_beginning")) {
                    var identifier = WebMrbc.Collections.ClassWorkspaces.uniqueName("LocalNode");
                    var localNode = new WebMrbc.JsonNodeInfo(WebMrbc.App.nodeProfileClass, identifier, "local");
                    $t = Bridge.getEnumerator(localNode.type.properties);
                    while ($t.moveNext()) {
                        var item = $t.getCurrent();
                        if ((item.required.length > 0) && (!Bridge.referenceEquals(item.required[0], "NONE"))) {
                            localNode.properties.push(new WebMrbc.JsonPropertyInfo.$ctor1(item));
                        }
                    }
                    var enode = new WebMrbc.ENodeWorkspace(localNode);
                    WebMrbc.Collections.LocalNode = enode;
                    WebMrbc.Collections.ClassWorkspaces.add(enode);
                    WebMrbc.Views.ClassSelectorView.selectItem(enode);
                    window["changed"] = false;
                }
            },
            applyPreferences: function () {
                window["textEditor"].setReadOnly(WebMrbc.App.isEnabled("enabled_readonly_ruby_mode"));

                if (WebMrbc.App.isEnabled("disabled_new_eobject")) {
                    $("#add-eobject-item").hide();
                } else {
                    $("#add-eobject-item").show();
                }
            },
            setPreferences: function (preferences) {
                WebMrbc.App.preferences = preferences;
                WebMrbc.App.applyPreferences();
                WebMrbc.App.changedAfterTranslating = true;
                WebMrbc.App.reloadToolbox();
            },
            isEnabled: function (name) {
                var e = { };
                if (!WebMrbc.App.preferences.tryGetValue(name, e)) {
                    return false;
                }
                if (Bridge.is(e.v, Boolean)) {
                    return System.Nullable.getValue(Bridge.cast(e.v, Boolean));
                }
                var s = e.v.toString();
                return Bridge.referenceEquals(s, "true") || Bridge.referenceEquals(s, "1");
            },
            reloadToolbox: function () {
                Blockly.hideChaff();

                var workspace = WebMrbc.Views.ClassSelectorView.getCurrent();
                var toolbox = document.getElementById("toolbox");
                workspace.WebMrbc$IClassWorkspace$reloadToolbox(toolbox);

                Blockly.mainWorkspace.updateToolbox(toolbox);
            },
            hideEmptyCategory: function () {
                var $t;
                var i = 1;
                $t = Bridge.getEnumerator(Blockly.getMainWorkspace().options.languageTree.childNodes);
                while ($t.moveNext()) {
                    var node = $t.getCurrent();
                    var element = Bridge.as(node, Element);
                    if (element == null) {
                        continue;
                    }

                    if ((element.getElementsByTagName("block").length === 0) && (element.getAttribute("custom") == null)) {
                        $(System.String.concat(System.String.concat("div.blocklyTreeRoot > div:nth-child(2) > div:nth-child(", i), ")[aria-level='1']")).hide();
                    }
                    i = (i + 1) | 0;
                }
            }
        },
        $entryPoint: true
    });

    var $_ = {};

    Bridge.define("$AnonymousType$1", $_, {
        $kind: "anonymous",
        ctor: function (cols, rows, useStyle, screenKeys, cursorBlink) {
            this.cols = cols;
            this.rows = rows;
            this.useStyle = useStyle;
            this.screenKeys = screenKeys;
            this.cursorBlink = cursorBlink;
        },
        getcols : function () {
            return this.cols;
        },
        getrows : function () {
            return this.rows;
        },
        getuseStyle : function () {
            return this.useStyle;
        },
        getscreenKeys : function () {
            return this.screenKeys;
        },
        getcursorBlink : function () {
            return this.cursorBlink;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.cols, o.cols) && Bridge.equals(this.rows, o.rows) && Bridge.equals(this.useStyle, o.useStyle) && Bridge.equals(this.screenKeys, o.screenKeys) && Bridge.equals(this.cursorBlink, o.cursorBlink);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320272310, this.cols, this.rows, this.useStyle, this.screenKeys, this.cursorBlink]);
            return h;
        },
        toJSON: function () {
            return {
                cols : this.cols,
                rows : this.rows,
                useStyle : this.useStyle,
                screenKeys : this.screenKeys,
                cursorBlink : this.cursorBlink
            };
        }
    });

    Bridge.define("$AnonymousType$2", $_, {
        $kind: "anonymous",
        ctor: function (toolbox, trashcan) {
            this.toolbox = toolbox;
            this.trashcan = trashcan;
        },
        gettoolbox : function () {
            return this.toolbox;
        },
        gettrashcan : function () {
            return this.trashcan;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$2)) {
                return false;
            }
            return Bridge.equals(this.toolbox, o.toolbox) && Bridge.equals(this.trashcan, o.trashcan);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320337846, this.toolbox, this.trashcan]);
            return h;
        },
        toJSON: function () {
            return {
                toolbox : this.toolbox,
                trashcan : this.trashcan
            };
        }
    });

    Bridge.ns("WebMrbc.App", $_);

    Bridge.apply($_.WebMrbc.App, {
        f1: function (data) {
            if (WebMrbc.App.module != null && WebMrbc.App.module.stdin != null) {
                WebMrbc.App.module.stdin(data);
            }
        },
        f2: function (title) {
            document.title = title;
        },
        f3: function () {
            if (!WebMrbc.App.translating) {
                window["changed"] = true;
                WebMrbc.App.changedAfterTranslating = true;
            }
        },
        f4: function () {
            WebMrbc.App.initClassGroups($("#eobject-modal").get(0));
        },
        f5: function () {
            WebMrbc.App.addEObjectFromBeginning();
        },
        f6: function () {
            if (WebMrbc.App.nodeProfileClass != null) {
                WebMrbc.App.updateProperties(WebMrbc.App.nodeProfileClass, $_.WebMrbc.App.f5);
            }
        },
        f7: function (pc) {
            return parseInt(pc, 16);
        },
        f8: function (e) {
            if (e == null) {
                e = Bridge.cast(window["Event"], jQuery.Event);
            }
            if (e.keyCode === 13) {
                return false;
            } else {
                return true;
            }
        },
        f9: function () {
            $(".modal-backdrop").remove();
        }
    });

    Bridge.define("WebMrbc.Value");

    Bridge.define("WebMrbc.ClassSelectorView", {
        collection: null,
        el: null,
        templateText: null,
        m_ClassWorkspace: null,
        ctor: function (collection) {
            this.$initialize();
            this.el = $("#class-selector-tab");

            this.collection = collection;
            collection.onAdd = Bridge.fn.combine(collection.onAdd, Bridge.fn.bind(this, this.onChange));
            collection.onRemove = Bridge.fn.combine(collection.onRemove, Bridge.fn.bind(this, this.onChange));
            collection.onReset = Bridge.fn.combine(collection.onReset, Bridge.fn.bind(this, this.onChange));
            collection.onChange = Bridge.fn.combine(collection.onChange, Bridge.fn.bind(this, this.onChange));

            if (collection.getLength() > 0) {
                this.m_ClassWorkspace = collection.at(0);
            }

            this.templateText = $("#class-selector-template").text();
            $("#add-eobject-button").click(Bridge.fn.bind(this, function (e) {
                var $t;
                e.preventDefault();
                this.m_ClassWorkspace.WebMrbc$IClassWorkspace$loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
                Blockly.mainWorkspace.clear();

                var eobject = new WebMrbc.JsonObjectInfo(WebMrbc.App.nodeProfileClass, collection.uniqueName("Kaden"));
                this.m_ClassWorkspace = new WebMrbc.EObjectWorkspace(eobject);
                $t = Bridge.getEnumerator(eobject.type.properties);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    if ((item.required.length > 0) && (!Bridge.referenceEquals(item.required[0], "NONE"))) {
                        eobject.properties.push(new WebMrbc.JsonPropertyInfo.$ctor1(item));
                    }
                }
                this.m_ClassWorkspace.WebMrbc$IClassWorkspace$openModifyView(Bridge.fn.bind(this, function (ok) {
                    if (ok) {
                        collection.add(this.m_ClassWorkspace);
                    }
                }));
            }));
            this.render();
        },
        getCurrent: function () {
            return this.m_ClassWorkspace;
        },
        render: function () {
            var charsEl = $("#class-selector-eobject-set");
            charsEl.children().remove();
            this.collection.each(Bridge.fn.bind(this, function (eobject) {
                var html = $(eobject.WebMrbc$IClassWorkspace$template(this.templateText));
                charsEl.append(html);
                var selectedMark = html.find("a.selected-mark");
                if (Bridge.referenceEquals(this.m_ClassWorkspace, eobject)) {
                    selectedMark.show();
                } else {
                    selectedMark.hide();
                }
                html.find("a.eobject").click(Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    if (!Bridge.referenceEquals(this.m_ClassWorkspace, eobject)) {
                        this.selectItem(eobject);
                    }
                }));
                html.find("a.modify-button").click(Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    this.m_ClassWorkspace = eobject;
                    this.m_ClassWorkspace.WebMrbc$IClassWorkspace$openModifyView(Bridge.fn.bind(this, $_.WebMrbc.ClassSelectorView.f1));
                }));
                var removeButton = html.find("a.remove-button");
                removeButton.click(Bridge.fn.bind(this, function (e) {
                    e.preventDefault();
                    this.m_ClassWorkspace = null;
                    this.removeEObject_(eobject);
                }));
                if ((WebMrbc.App.isEnabled("disabled_new_eobject")) || eobject.WebMrbc$IClassWorkspace$isPreset()) {
                    removeButton.hide();
                }
                var img = html.find("img");
                img.on("dragstart", $_.WebMrbc.ClassSelectorView.f2);
            }));
        },
        selectItem: function (model) {
            var html, selectedMark;
            var charsEl = $("#class-selector-eobject-set");

            if (this.m_ClassWorkspace != null) {
                html = charsEl.find(System.String.concat("#", this.m_ClassWorkspace.WebMrbc$IModel$getIdentifier()));
                selectedMark = html.find("a.selected-mark");
                selectedMark.hide();
                this.m_ClassWorkspace.WebMrbc$IClassWorkspace$loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
            }

            this.m_ClassWorkspace = model;
            WebMrbc.App.reloadToolbox();
            Blockly.mainWorkspace.clear();

            if ((this.m_ClassWorkspace == null) && (this.collection.getLength() > 0)) {
                this.m_ClassWorkspace = this.collection.at(0);
            }

            if (this.m_ClassWorkspace != null) {
                Blockly.Xml.domToWorkspace(this.m_ClassWorkspace.WebMrbc$IClassWorkspace$toDom(), Blockly.mainWorkspace);

                html = charsEl.find(System.String.concat("#", this.m_ClassWorkspace.WebMrbc$IModel$getIdentifier()));
                selectedMark = html.find("a.selected-mark");
                selectedMark.show();
            }
        },
        onChange: function (sender, e) {
            this.render();
        },
        removeEObject_: function (model) {
            if (WebMrbc.App.isEnabled("disabled_new_eobject") || model.WebMrbc$IClassWorkspace$isPreset()) {
                return;
            }

            if (Bridge.referenceEquals(this.m_ClassWorkspace, model)) {
                this.m_ClassWorkspace = null;
            }

            this.collection.remove(model);
        }
    });

    Bridge.ns("WebMrbc.ClassSelectorView", $_);

    Bridge.apply($_.WebMrbc.ClassSelectorView, {
        f1: function (ok) {
            this.render();
        },
        f2: function (e) {
            e.preventDefault();
        }
    });

    Bridge.define("WebMrbc.CodeGenerator", {
        statics: {
            getClassIdentifier: function (ci) {
                var cls = ci;
                var result = ci.type.type;

                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("ecn_cls{0:X2}{1:X2}_t", cls.type.classGroup.classGroupCode, cls.type.classCode);
                } else {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do {
                            var len = (m.index - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);
                        if (Bridge.referenceEquals(blocks[((blocks.length - 1) | 0)], "type")) {
                            blocks[((blocks.length - 1) | 0)] = "t";
                        } else {
                            blocks.push("t");
                        }
                        result = blocks.join("_");
                    }
                }

                return result;
            },
            getPropertyIdentifier: function (pi) {
                var cls = pi.classInfo;
                var fi = pi;
                var result = fi.identifier;

                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("property{0:X2}", pi.propertyCode);
                } else {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do {
                            var len = (m.index - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);
                        result = blocks.join("_");
                    }
                }

                if (fi.isArray) {
                    result = System.String.concat(result, (System.String.format("[{0}]", pi.arrayCount)));
                }

                return result;
            },
            getFieldIdentifier: function (efi) {
                var fi = efi;
                var result = fi.identifier;

                if (!new RegExp("^[A-Za-z_][A-Za-z0-9_]+$").test(result)) {
                    result = System.String.format("field{0:X8}", efi.type);
                } else {
                    var ms = new RegExp("[A-Z][a-z]+", "g");
                    var m;
                    if (((m = ms.exec(result))) != null) {
                        var blocks = System.Array.init(0, null);
                        var pos = 0;
                        do {
                            var len = (m.index - pos) | 0;
                            blocks.push(result.substr(pos, len).toLowerCase());
                            pos = (pos + len) | 0;
                        } while (((m = ms.exec(result))) != null);

                        result = blocks.join("_");
                    }
                }

                if (fi.isArray) {
                    result = System.String.concat(result, (System.String.format("[{0}]", efi.arrayCount)));
                }

                return System.String.concat("@", result);
            },
            getObjectIdentifier: function (ci) {
                var name = ci.identifier;

                if (System.String.endsWith(name, "_EOBJ")) {
                    name = name.substr(0, ((name.length - 5) | 0));
                }

                if (System.String.startsWith(name, "0x")) {
                    return System.String.concat(System.String.concat("eobj_", name.substr(2, ((name.length - 2) | 0))), "_data");
                }

                return System.String.concat(name.toLowerCase(), "_data");
            },
            getEobjAttribute: function (eci) {
                switch (eci.attribute) {
                    case "local": 
                        return "EOBJ_LOCAL_NODE";
                    case "sync": 
                        return "EOBJ_SYNC_REMOTE_NODE";
                    case "async": 
                        return "EOBJ_ASYNC_REMOTE_NODE";
                    case "device": 
                        return "EOBJ_DEVICE";
                    default: 
                        return "EOBJ_NONE";
                }
            },
            getNode: function (eci) {
                var parent = eci.parent;

                if (parent == null) {
                    return "EOBJ_NULL";
                } else {
                    return parent.identifier;
                }
            },
            getEpc: function (epi) {
                return System.String.format("0x{0:X2}", epi.propertyCode);
            },
            getAccess: function (epi) {
                var result = System.Array.init(0, null);

                var access = System.Linq.Enumerable.from(epi.access).toArray();

                if (System.Array.contains(access, "RULE_ANNO", String)) {
                    result.push("EPC_RULE_ANNO");
                }

                if (System.Array.contains(access, "RULE_SET", String)) {
                    result.push("EPC_RULE_SET");
                }

                if (System.Array.contains(access, "RULE_GET", String)) {
                    result.push("EPC_RULE_GET");
                }

                if (System.Array.contains(access, "ANNOUNCE", String)) {
                    result.push("EPC_ANNOUNCE");
                }

                if (System.Array.contains(access, "VARIABLE", String)) {
                    result.push("EPC_VARIABLE");
                }

                if (result.length === 0) {
                    return "EPC_NONE";
                }

                return result.join(" | ");
            },
            getSize: function (epi) {
                return (((((epi.arrayCount === 0) ? 1 : epi.arrayCount) * epi.size) | 0)).toString();
            },
            getExinf: function (epi) {
                switch (epi.propertyCode) {
                    case 151: 
                    case 152: 
                        // 現在年月日設定
                        return "nil";
                    default: 
                        return System.String.concat("@", WebMrbc.CodeGenerator.getPropertyIdentifier(epi));
                }
            },
            hasPropSetter: function (epi, valueRange) {
                valueRange.v = null;

                if (!epi.primitive || (epi.arrayCount !== 0)) {
                    return false;
                }

                valueRange.v = WebMrbc.ValueRange.parse(epi.valueDescription, epi);
                if ((valueRange.v.getValues().length > 0) || (valueRange.v.getRanges().length > 0)) {
                    return true;
                }

                valueRange.v = null;
                return false;
            },
            getSetter: function (epi) {
                switch (epi.propertyCode) {
                    case 128: 
                        return "onoff_prop_set";
                    case 136: 
                        return "alarm_prop_set";
                    case 151: 
                        return "time_prop_set";
                    case 152: 
                        return "date_prop_set";
                    default: 
                        var valueRange = { };
                        if (WebMrbc.CodeGenerator.hasPropSetter(epi, valueRange)) {
                            var clsName = WebMrbc.CodeGenerator.getClassIdentifier(epi.classInfo);
                            if (System.String.endsWith(clsName, "_t")) {
                                clsName = clsName.substr(0, ((clsName.length - 2) | 0));
                            }
                            return System.String.concat(System.String.concat(System.String.concat(clsName, "_"), WebMrbc.CodeGenerator.getPropertyIdentifier(epi)), "_set");
                        }
                        return "ecn_data_prop_set";
                }
            },
            getGetter: function (epi) {
                switch (epi.propertyCode) {
                    case 151: 
                        return "time_prop_get";
                    case 152: 
                        return "date_prop_get";
                    default: 
                        return "ecn_data_prop_get";
                }
            },
            getInitialValue$1: function (body, emi, description, valRng, indent, recursive) {
                var $t;
                var pluse = "";
                body.appendLine(System.String.concat(System.String.concat(indent, "# "), description));
                if (recursive) {
                    body.append(indent);
                    pluse = " +";
                } else {
                    body.append(System.String.concat(System.String.concat(indent, WebMrbc.CodeGenerator.getFieldIdentifier(emi)), " = "));
                }

                if (Bridge.referenceEquals(emi.type, "manufacturer_code_t")) {
                    body.appendLine(System.String.concat("$MAKER_CODE", pluse));
                    return;
                }

                if (Bridge.referenceEquals(emi.type, "version_information_t")) {
                    body.appendLine(System.String.concat("\"\\x01\\x0A\\x01\\x00\"", pluse));
                    return;
                }

                if (Bridge.referenceEquals(emi.type, "standard_version_information_t")) {
                    body.appendLine(System.String.concat("\"\\x00\\x00C\\x00\"", pluse));
                    return;
                }

                if (emi.primitive) {
                    var count = emi.arrayCount;
                    if (count === 0) {
                        body.appendLine(System.String.concat(System.String.concat(System.String.concat("\"", WebMrbc.CodeGenerator.getInitialValue(valRng, emi)), "\""), pluse));
                    } else {
                        body.append("\"");
                        for (var i = 0; i < count; i = (i + 1) | 0) {
                            body.append(WebMrbc.CodeGenerator.getInitialValue(valRng, emi));
                        }
                        body.appendLine(System.String.concat("\"", pluse));
                    }
                } else {
                    if (!recursive) {
                        body.appendLine();
                    }
                    $t = Bridge.getEnumerator(emi.fields);
                    while ($t.moveNext()) {
                        var efi = $t.getCurrent();
                        WebMrbc.CodeGenerator.getInitialValue$1(body, efi, efi.description, efi.valueDescription, System.String.concat(indent, "\t"), true);
                    }
                    if (!recursive) {
                        body.appendLine(System.String.concat(indent, "\t\"\""));
                    }
                }
            },
            getInitialValue: function (valRng, pi) {
                var valueRange = WebMrbc.ValueRange.parse(valRng, pi);
                var init = System.String.concat("0000000000000000", valueRange.getInitailValue());

                var temp = System.Array.init(((4 * pi.size) | 0), function (){
                    return new System.Char();
                });
                for (var i = 0, j = (init.length - ((2 * pi.size) | 0)) | 0; i < temp.length; i = (i + 1) | 0, j = (j + 1) | 0) {
                    if ((i % 4) === 0) {
                        temp[Bridge.identity(i, (i = (i + 1) | 0))] = 92;
                        temp[Bridge.identity(i, (i = (i + 1) | 0))] = 120;
                    }
                    temp[i] = init.charCodeAt(j);
                }
                return String.fromCharCode.apply(null, temp);
            },
            isExtractProperty: function (prp) {
                switch (prp.propertyCode) {
                    case 155: 
                    case 156:  // ＳｅｔＭプロパティマップ // ＧｅｔＭプロパティマップ
                        // はECHONET Liteにはないので作らない
                        return true;
                    case 157: 
                    case 158: 
                    case 159: 
                    case 211: 
                    case 212: 
                    case 213: 
                    case 214: 
                    case 215:  // 状変アナウンスプロパティマップ // Ｓｅｔプロパティマップ // Ｇｅｔプロパティマップ // 自ノードインスタンス数 // 自ノードクラス数 // インスタンスリスト通知 // 自ノードインスタンスリストＳ // 自ノードクラスリストＳ
                        // はコンフィグレーターで生成するので作らない
                        return true;
                }

                return false;
            }
        },
        _ClassInfo: null,
        _PropertyInfos: null,
        ctor: function (cls) {
            this.$initialize();        var $t;

            this._ClassInfo = cls;
            $t = Bridge.getEnumerator(cls.properties);
            while ($t.moveNext()) {
                var prp = $t.getCurrent();
                prp.classInfo = cls;
            }
            this._PropertyInfos = cls.properties;
    },
    defineEchonetObject: function (indent) {
        var $t;
        var body = new System.Text.StringBuilder();

        $t = Bridge.getEnumerator(this._PropertyInfos);
        while ($t.moveNext()) {
            var pi = $t.getCurrent();
            if (WebMrbc.CodeGenerator.isExtractProperty(pi)) {
                continue;
            }

            WebMrbc.CodeGenerator.getInitialValue$1(body, pi, pi.description, pi.valueDescription, indent, false);
        }

        return body.toString();
    },
    configEchonetObject: function (indent) {
        var $t;
        var body = new System.Text.StringBuilder();

        body.appendLine(System.String.concat(indent, "# プロパティ定義"));
        body.appendLine(System.String.concat(indent, "eprpinib_table = ["));
        $t = Bridge.getEnumerator(this._PropertyInfos);
        while ($t.moveNext()) {
            var epi = $t.getCurrent();
            if (WebMrbc.CodeGenerator.isExtractProperty(epi)) {
                continue;
            }

            body.appendLine(System.String.concat(indent, System.String.format("\tECNL::EProperty.new({0}, {1}, {2}, {3}, :{4}, :{5}),", WebMrbc.CodeGenerator.getEpc(epi), WebMrbc.CodeGenerator.getAccess(epi), WebMrbc.CodeGenerator.getSize(epi), WebMrbc.CodeGenerator.getExinf(epi), WebMrbc.CodeGenerator.getSetter(epi), WebMrbc.CodeGenerator.getGetter(epi))));
        }
        body.appendLine(System.String.concat(indent, "]"));

        return body.toString();
    }
    });

    Bridge.define("WebMrbc.CodeGenWorkArea", {
        setterDefs: null,
        getterDefs: null,
        config: {
            init: function () {
                this.setterDefs = System.Array.init(0, null);
                this.getterDefs = System.Array.init(0, null);
            }
        }
    });

    Bridge.define("WebMrbc.IModel", {
        $kind: "interface"
    });

    Bridge.define("WebMrbc.Collections", {
        statics: {
            LocalNode: null,
            ClassWorkspaces: null,
            EcnlTaskWorkspace: null,
            MainLoopWorkspace: null
        }
    });

    Bridge.define("WebMrbc.Colour", {
        statics: {
            HUE: 20
        }
    });

    Bridge.define("WebMrbc.ContextMenuOption", {
        enabled: false,
        text: null,
        callback: null
    });

    Bridge.define("WebMrbc.EmModule", {
        preRun: null,
        postRun: null,
        _Term: null,
        canvas: null,
        setStatus: null,
        _last: null,
        _text: null,
        totalDependencies: 0,
        config: {
            init: function () {
                this.preRun = System.Array.init(0, null);
                this.postRun = System.Array.init(0, null);
            }
        },
        ctor: function (term) {
            this.$initialize();
            this._Term = term;
            this.canvas = document.getElementById("canvas");

            // As a default initial behavior, pop up an alert when webgl context is lost. To make your
            // application robust, you may want to override this behavior before shipping!
            // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
            this.canvas.addEventListener("webglcontextlost", $_.WebMrbc.EmModule.f1, false);
            this.setStatus = Bridge.fn.bind(this, this._setStatus);
        },
        print: function (arg) {
            var $t;
            var text;
            var args;
            if (Bridge.referenceEquals(Bridge.getType(arg), String)) {
                text = Bridge.cast(arg, String);
            } else {
                if (Bridge.is(Bridge.getType(arg), Array) && ((args = Bridge.cast(arg, Array))).length > 1) {
                    var texts = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(args);
                    while ($t.moveNext()) {
                        var ele = $t.getCurrent();
                        texts.push(ele.toString());
                    }
                    text = texts.join(" ");
                } else {
                    text = arg.toString();
                }
            }

            Bridge.Console.log(text);
            if (this._Term != null) {
                this._Term.write(System.String.concat(text, "\r\n"));
            }
        },
        printErr: function (arg) {
            var $t;
            var text;
            var args;
            if (Bridge.referenceEquals(Bridge.getType(arg), String)) {
                text = Bridge.cast(arg, String);
            } else {
                if (Bridge.is(Bridge.getType(arg), Array) && ((args = Bridge.cast(arg, Array))).length > 1) {
                    var texts = System.Array.init(0, null);
                    $t = Bridge.getEnumerator(args);
                    while ($t.moveNext()) {
                        var ele = $t.getCurrent();
                        texts.push(ele.toString());
                    }
                    text = texts.join(" ");
                } else {
                    text = arg.toString();
                }
            }

            Bridge.Console.log(text);
            if (this._Term != null) {
                this._Term.write(System.String.concat(text, "\r\n"));
            }
        },
        _setStatus: function (text) {
            if (this._last == null) {
                this._last = new $_.$AnonymousType$3(System.Int64((new Date()).getTime()).mul(10000), "");
            }
            if (Bridge.referenceEquals(text, this._text)) {
                return;
            }
            this._text = text;
            var progressElement = Bridge.cast(document.getElementById("progress"), HTMLProgressElement);
            var spinnerElement = Bridge.cast(document.getElementById("spinner"), HTMLDivElement);
            var m = text.match(new RegExp("([^(]+)\\((\\d+(\\.\\d+)?)\\/(\\d+)\\)"));
            var now = System.Int64((new Date()).getTime()).mul(10000);
            if (m != null && now.sub(System.Int64((new Date()).getTime()).mul(10000)).lt(System.Int64(30))) {
                return;
            } // if this is a progress update, skip it if too soon
            if (m != null) {
                text = m[1];
                progressElement.value = (parseInt(m[2]) * 100) | 0;
                progressElement.max = (parseInt(m[4]) * 100) | 0;
                progressElement.setAttribute("hidden", "false");
                spinnerElement.setAttribute("hidden", "false");
            } else {
                progressElement.value = 0.0;
                progressElement.max = 0.0;
                progressElement.setAttribute("hidden", "true");
                if (!System.String.isNullOrEmpty(text)) {
                    spinnerElement.style.display = "none";
                }
            }
            var statusElement = Bridge.cast(document.getElementById("status"), HTMLDivElement);
            statusElement.innerHTML = text;
        },
        monitorRunDependencies: function (left) {
            this.totalDependencies = Math.max(this.totalDependencies, left);
            this.setStatus((left !== 0) ? System.String.concat(System.String.concat(System.String.concat(System.String.concat("Preparing... (", (((this.totalDependencies - left) | 0))), "/"), this.totalDependencies), ")") : "All downloads complete.");
        },
        getFileSystem: function () {
            return this.FS;
        }
    });

    Bridge.define("$AnonymousType$3", $_, {
        $kind: "anonymous",
        ctor: function (time, text) {
            this.time = time;
            this.text = text;
        },
        gettime : function () {
            return this.time;
        },
        gettext : function () {
            return this.text;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$3)) {
                return false;
            }
            return Bridge.equals(this.time, o.time) && Bridge.equals(this.text, o.text);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320403382, this.time, this.text]);
            return h;
        },
        toJSON: function () {
            return {
                time : this.time,
                text : this.text
            };
        }
    });

    Bridge.ns("WebMrbc.EmModule", $_);

    Bridge.apply($_.WebMrbc.EmModule, {
        f1: function (e) {
            window.alert("WebGL context lost. You will need to reload the page.");
            e.preventDefault();
        }
    });

    Bridge.define("WebMrbc.EObjectModalView", {
        el: null,
        model: null,
        target: null,
        currentClassGroup: null,
        config: {
            events: {
                Closed: null
            }
        },
        ctor: function () {
            this.$initialize();
            this.el = $("#eobject-modal");
        },
        setEObject: function (eobject, imgUrl) {
            this.target = eobject;
            this.model = WebMrbc.JsonObjectInfoExtention.clone(eobject);

            var cg = this.model.type.classGroup;
            if ((Bridge.referenceEquals(this.model.attribute, "device")) && (Bridge.referenceEquals(this.model.type, WebMrbc.App.nodeProfileClass))) {
                cg = WebMrbc.App.classGroups[0];
            }

            var img = ($("<img>"));
            img.attr("src", imgUrl);
            img.attr("alt", this.model.identifier);
            $("#eobject-modal-eobject img").replaceWith(img);

            $("#eobject_identifier").val(this.model.identifier);
            $("#eobject_instanceCode").val(this.model.instanceCode.toString());
            this.setAttribute(this.model.attribute);

            this.setClassGroup(cg, Bridge.fn.bind(this, $_.WebMrbc.EObjectModalView.f1));
        },
        render: function () {
            this.el.modal({ backdrop: "static", show: true });
        },
        setAttribute: function (attribute) {
            var dropdown = $("#eobject_attribute").parent();
            var button = $("button[type='button']", dropdown);
            button.attr("disabled", "disabled");

            var menuitem = $("a[role='menuitem']", dropdown);

            var text;
            switch (attribute) {
                case "local": 
                    text = menuitem.get(0).textContent;
                    break;
                case "sync": 
                    text = menuitem.get(1).textContent;
                    break;
                case "async": 
                    text = menuitem.get(2).textContent;
                    break;
                case "device": 
                    text = menuitem.get(3).textContent;
                    break;
                default: 
                    text = attribute;
                    break;
            }

            this.setAttribute$1(attribute, text);
        },
        setAttribute$1: function (attribute, text) {
            this.model.attribute = attribute;

            var button = $("#eobject_attribute");
            button.text(text);

            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);
        },
        setClassGroup: function (cg, success) {
            if (success === void 0) { success = null; }
            this.currentClassGroup = cg;

            var button = $("#eobject_classGroupCode");
            button.text(cg.description);

            if (Bridge.referenceEquals(this.model.attribute, "device")) {
                button.removeAttr("disabled");
            } else {
                button.attr("disabled", "disabled");
            }

            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);

            if (cg.classes != null) {
                this.initClasss(cg);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
                return;
            }

            WebMrbc.App.updateClass(cg, Bridge.fn.bind(this, function () {
                this.initClasss(cg);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
            }));
        },
        setClass: function (c, success) {
            if (success === void 0) { success = null; }
            this.model.type = c;

            var button = $("#eobject_classCode");
            button.text(c.description);

            if (Bridge.referenceEquals(this.model.attribute, "device")) {
                button.removeAttr("disabled");
            } else {
                button.attr("disabled", "disabled");
            }

            var caret = document.createElement("span");
            caret.setAttribute("class", "caret");
            button.get(0).appendChild(caret);

            if (c.properties != null) {
                this.initProperties(c);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
                return;
            }

            WebMrbc.App.updateProperties(c, Bridge.fn.bind(this, function () {
                this.initProperties(c);
                if (!Bridge.staticEquals(success, null)) {
                    success();
                }
            }));
        },
        initClassGroups: function () {
            var $t;
            var ul = $("#eobject_classGroups").get(0);

            ul.innerHTML = "";

            $t = Bridge.getEnumerator(WebMrbc.App.classGroups);
            while ($t.moveNext()) {
                var cg = $t.getCurrent();
                var li = document.createElement("li");
                li.setAttribute("role", "presentation");

                var a = document.createElement("a");
                a.setAttribute("role", "menuitem");
                a.appendChild(document.createTextNode(cg.description));
                ($(a)).click(cg, Bridge.fn.bind(this, this.onSelectClassGroupCode));

                li.appendChild(a);
                ul.appendChild(li);
            }
        },
        initClasss: function (cg) {
            var $t;
            var ul = $("#eobject_classs").get(0);

            ul.innerHTML = "";

            $t = Bridge.getEnumerator(cg.classes);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                var li = document.createElement("li");
                li.setAttribute("role", "presentation");

                var a = document.createElement("a");
                a.setAttribute("role", "menuitem");
                a.appendChild(document.createTextNode(c.description));
                ($(a)).click(c, Bridge.fn.bind(this, this.onSelectClassCode));

                li.appendChild(a);
                ul.appendChild(li);
            }
        },
        initProperties: function (c) {
            var $t;
            var div = $("#eobject_properties").get(0);

            div.innerHTML = "";

            $t = Bridge.getEnumerator(c.properties);
            while ($t.moveNext()) {
                var p = $t.getCurrent();
                var label = document.createElement("label");
                label.setAttribute("class", "btn btn-default");

                var input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("autocomplete", "off");

                label.appendChild(input);
                label.appendChild(document.createTextNode(p.description));
                label.setAttribute("data-ecnl-epc", p.propertyCode.toString());

                div.appendChild(label);

                if ((p.required.length > 0) && (!Bridge.referenceEquals(p.required[0], "NONE"))) {
                    ($(label)).button('toggle');
                }
            }
        },
        updateProperties: function () {
            var $t, $t1;
            var labels = $("#eobject_properties > .btn.btn-default");

            $t = Bridge.getEnumerator(labels.get());
            while ($t.moveNext()) {
                var l = Bridge.cast($t.getCurrent(), Element);
                var label = $(l);
                if (label.is(".active")) {
                    label.button('toggle');
                }

                var sepc = label.attr("data-ecnl-epc");
                if (sepc == null) {
                    continue;
                }

                var epc = parseInt(sepc);
                var prop = null;
                $t1 = Bridge.getEnumerator(this.model.properties);
                while ($t1.moveNext()) {
                    var p = $t1.getCurrent();
                    if (p.propertyCode !== epc) {
                        continue;
                    }
                    prop = p;
                    break;
                }
                if (prop != null) {
                    label.button('toggle');
                }
            }
        },
        onSelectAttribute: function (sender, attribute) {
            var text = sender.textContent;
            this.setAttribute$1(attribute, text);
        },
        onSelectClassGroupCode: function (e) {
            var cg = Bridge.cast(e.data, WebMrbc.JsonClassGroupInfo);
            this.setClassGroup(cg, Bridge.fn.bind(this, function () {
                this.setClass(cg.classes[0], Bridge.fn.bind(this, this.updateProperties));
            }));
        },
        onSelectClassCode: function (e) {
            this.setClass(Bridge.cast(e.data, WebMrbc.JsonClassInfo), Bridge.fn.bind(this, this.updateProperties));
        },
        onChangeInstanceCode: function (sender) {
            this.model.instanceCode = (parseInt(($(sender)).val())) & 255;
        },
        onOk: function (ele) {
            var $t, $t1;
            if ((Bridge.referenceEquals(this.model.attribute, "device")) && (Bridge.referenceEquals(this.model.type, WebMrbc.App.nodeProfileClass))) {
                return;
            }

            this.el.modal("hide");

            this.target.type = this.model.type;
            this.target.identifier = this.model.identifier;
            this.target.parent = this.model.parent;
            this.target.instanceCode = this.model.instanceCode;
            this.target.attribute = this.model.attribute;
            this.target.properties = System.Array.init(0, null);

            var labels = $("#eobject_properties > .btn.btn-default");

            $t = Bridge.getEnumerator(labels.get());
            while ($t.moveNext()) {
                var l = Bridge.cast($t.getCurrent(), Element);
                var label = $(l);
                if (!label.is(".active")) {
                    continue;
                }

                var sepc = label.attr("data-ecnl-epc");
                if (sepc == null) {
                    continue;
                }

                var epc = parseInt(sepc);
                var prop = null;
                $t1 = Bridge.getEnumerator(this.model.type.properties);
                while ($t1.moveNext()) {
                    var p = $t1.getCurrent();
                    if (p.propertyCode !== epc) {
                        continue;
                    }
                    prop = p;
                    break;
                }
                if (prop != null) {
                    this.target.properties.push(prop);
                }
            }

            if (!Bridge.staticEquals(this.Closed, null)) {
                this.Closed(this, true);
            }
        },
        onCancel: function (ele) {
            this.el.modal("hide");

            if (!Bridge.staticEquals(this.Closed, null)) {
                this.Closed(this, false);
            }
        }
    });

    Bridge.ns("WebMrbc.EObjectModalView", $_);

    Bridge.apply($_.WebMrbc.EObjectModalView, {
        f1: function () {
            var c = this.model.type;
            if ((Bridge.referenceEquals(this.model.attribute, "device")) && (Bridge.referenceEquals(this.model.type, WebMrbc.App.nodeProfileClass))) {
                c = WebMrbc.App.classGroups[0].classes[0];
            }
            this.setClass(c, Bridge.fn.bind(this, this.updateProperties));
        }
    });

    Bridge.define("WebMrbc.Generator", {
        ctor: function (name) {
            this.$initialize();
            var i; var g = new Blockly.Generator(); for (i in g) if (!this[i]) this[i] = g[i];
            Blockly.Generator.call(this, name);
        }
    });

    Bridge.define("WebMrbc.GrSakura", {
        statics: {
            pins: function () {
                return new Blockly.FieldDropdown([["IO0", "PIN_IO0"], ["IO1", "PIN_IO1"], ["IO2", "PIN_IO2"], ["IO3", "PIN_IO3"], ["IO4", "PIN_IO4"], ["IO5", "PIN_IO5"], ["IO6", "PIN_IO6"], ["IO7", "PIN_IO7"], ["IO8", "PIN_IO8"], ["IO9", "PIN_IO9"], ["IO10", "PIN_IO10"], ["IO11", "PIN_IO11"], ["IO12", "PIN_IO12"], ["IO13", "PIN_IO13"], ["IO14", "PIN_IO14"], ["IO15", "PIN_IO15"], ["IO16", "PIN_IO16"], ["IO17", "PIN_IO17"], ["IO18", "PIN_IO18"], ["IO19", "PIN_IO19"], ["IO20", "PIN_IO20"], ["IO21", "PIN_IO21"], ["IO22", "PIN_IO22"], ["IO23", "PIN_IO23"], ["IO24", "PIN_IO24"], ["IO25", "PIN_IO25"], ["IO26", "PIN_IO26"], ["IO27", "PIN_IO27"], ["IO28", "PIN_IO28"], ["IO29", "PIN_IO29"], ["IO30", "PIN_IO30"], ["IO31", "PIN_IO31"], ["IO32", "PIN_IO32"], ["IO33", "PIN_IO33"], ["IO34", "PIN_IO34"], ["IO35", "PIN_IO35"], ["IO36", "PIN_IO36"], ["IO37", "PIN_IO37"], ["IO38", "PIN_IO38"], ["IO39", "PIN_IO39"], ["IO40", "PIN_IO40"], ["IO41", "PIN_IO41"], ["IO42", "PIN_IO42"], ["IO43", "PIN_IO43"], ["IO44", "PIN_IO44"], ["IO45", "PIN_IO45"], ["IO46", "PIN_IO46"], ["IO47", "PIN_IO47"], ["IO48", "PIN_IO48"], ["IO49", "PIN_IO49"], ["IO50", "PIN_IO50"], ["IO51", "PIN_IO51"], ["IO52", "PIN_IO52"], ["IO53", "PIN_IO53"], ["IO54", "PIN_IO54"], ["IO55", "PIN_IO55"], ["IO56", "PIN_IO56"], ["IO57", "PIN_IO57"], ["IO58", "PIN_IO58"], ["IO59", "PIN_IO59"], ["IO60", "PIN_IO60"], ["LED0", "PIN_LED0"], ["LED1", "PIN_LED1"], ["LED2", "PIN_LED2"], ["LED3", "PIN_LED3"], ["SW", "PIN_SW"]]);
            },
            analogPins: function () {
                return new Blockly.FieldDropdown([["AN000", "PIN_AN000"], ["AN001", "PIN_AN001"], ["AN002", "PIN_AN002"], ["AN003", "PIN_AN003"], ["AN004", "PIN_AN004"], ["AN005", "PIN_AN005"], ["AN006", "PIN_AN006"], ["AN007", "PIN_AN007"], ["AN008", "PIN_AN008"], ["AN009", "PIN_AN009"], ["AN010", "PIN_AN010"], ["AN011", "PIN_AN011"], ["AN012", "PIN_AN012"], ["AN013", "PIN_AN013"], ["ANINT", "PIN_ANINT"], ["ANTMP", "PIN_ANTMP"]]);
            },
            pwmPins: function () {
                return new Blockly.FieldDropdown([["IO0", "PIN_IO0"], ["IO1", "PIN_IO1"], ["IO2", "PIN_IO2"], ["IO3", "PIN_IO3"], ["IO4", "PIN_IO4"], ["IO5", "PIN_IO5"], ["IO6", "PIN_IO6"], ["IO7", "PIN_IO7"], ["IO9", "PIN_IO9"], ["IO10", "PIN_IO10"]]);
            },
            pinNameToNum: function (name) {
                switch (name) {
                    case "PIN_IO0": 
                        return 0;
                    case "PIN_IO1": 
                        return 1;
                    case "PIN_IO2": 
                        return 2;
                    case "PIN_IO3": 
                        return 3;
                    case "PIN_IO4": 
                        return 4;
                    case "PIN_IO5": 
                        return 5;
                    case "PIN_IO6": 
                        return 6;
                    case "PIN_IO7": 
                        return 7;
                    case "PIN_IO8": 
                        return 8;
                    case "PIN_IO9": 
                        return 9;
                    case "PIN_IO10": 
                        return 10;
                    case "PIN_IO11": 
                        return 11;
                    case "PIN_IO12": 
                        return 12;
                    case "PIN_IO13": 
                        return 13;
                    case "PIN_IO14": 
                        return 14;
                    case "PIN_IO15": 
                        return 15;
                    case "PIN_IO16": 
                        return 16;
                    case "PIN_IO17": 
                        return 17;
                    case "PIN_IO18": 
                        return 18;
                    case "PIN_IO19": 
                        return 19;
                    case "PIN_IO20": 
                        return 20;
                    case "PIN_IO21": 
                        return 21;
                    case "PIN_IO22": 
                        return 22;
                    case "PIN_IO23": 
                        return 23;
                    case "PIN_IO24": 
                        return 24;
                    case "PIN_IO25": 
                        return 25;
                    case "PIN_IO26": 
                        return 26;
                    case "PIN_IO27": 
                        return 27;
                    case "PIN_IO28": 
                        return 28;
                    case "PIN_IO29": 
                        return 29;
                    case "PIN_IO30": 
                        return 30;
                    case "PIN_IO31": 
                        return 31;
                    case "PIN_IO32": 
                        return 32;
                    case "PIN_IO33": 
                        return 33;
                    case "PIN_IO34": 
                        return 34;
                    case "PIN_IO35": 
                        return 35;
                    case "PIN_IO36": 
                        return 36;
                    case "PIN_IO37": 
                        return 37;
                    case "PIN_IO38": 
                        return 38;
                    case "PIN_IO39": 
                        return 39;
                    case "PIN_IO40": 
                        return 40;
                    case "PIN_IO41": 
                        return 41;
                    case "PIN_IO42": 
                        return 42;
                    case "PIN_IO43": 
                        return 43;
                    case "PIN_IO44": 
                        return 44;
                    case "PIN_IO45": 
                        return 45;
                    case "PIN_IO46": 
                        return 46;
                    case "PIN_IO47": 
                        return 47;
                    case "PIN_IO48": 
                        return 48;
                    case "PIN_IO49": 
                        return 49;
                    case "PIN_IO50": 
                        return 50;
                    case "PIN_IO51": 
                        return 51;
                    case "PIN_IO52": 
                        return 52;
                    case "PIN_IO53": 
                        return 53;
                    case "PIN_IO54": 
                        return 54;
                    case "PIN_IO55": 
                        return 55;
                    case "PIN_IO56": 
                        return 56;
                    case "PIN_IO57": 
                        return 57;
                    case "PIN_IO58": 
                        return 58;
                    case "PIN_IO59": 
                        return 59;
                    case "PIN_IO60": 
                        return 60;
                    case "PIN_LED0": 
                        return 61;
                    case "PIN_LED1": 
                        return 62;
                    case "PIN_LED2": 
                        return 63;
                    case "PIN_LED3": 
                        return 64;
                    case "PIN_SW": 
                        return 65;
                    case "PIN_AN000": 
                        return 14;
                    case "PIN_AN001": 
                        return 15;
                    case "PIN_AN002": 
                        return 16;
                    case "PIN_AN003": 
                        return 17;
                    case "PIN_AN004": 
                        return 18;
                    case "PIN_AN005": 
                        return 19;
                    case "PIN_AN006": 
                        return 20;
                    case "PIN_AN007": 
                        return 21;
                    case "PIN_AN008": 
                        return 22;
                    case "PIN_AN009": 
                        return 23;
                    case "PIN_AN010": 
                        return 24;
                    case "PIN_AN011": 
                        return 25;
                    case "PIN_AN012": 
                        return 26;
                    case "PIN_AN013": 
                        return 27;
                    case "PIN_ANINT": 
                        return 28;
                    case "PIN_ANTMP": 
                        return 29;
                    default: 
                        return -1;
                }
            },
            pinModeNameToNum: function (name) {
                switch (name) {
                    case "INPUT": 
                        return 0;
                    case "OUTPUT": 
                        return 1;
                    default: 
                        return -1;
                }
            },
            pinValueNameToNum: function (name) {
                switch (name) {
                    case "LOW": 
                        return 0;
                    case "HIGH": 
                        return 1;
                    default: 
                        return -1;
                }
            },
            analogRefModeNameToNum: function (name) {
                switch (name) {
                    case "DEFAULT": 
                        return 0;
                    case "INTERNAL": 
                        return 1;
                    case "EXTERNAL": 
                        return 2;
                    case "RAW12BIT": 
                        return 3;
                    default: 
                        return -1;
                }
            },
            i2CPorts: function () {
                return new Blockly.FieldDropdown([["SDA-0/SCL-1", "I2C0"], ["SDA-5/SCL-6", "I2C1"], ["SDA-7/SCL-8", "I2C2"], ["SDA-9(26)/SCL-3", "I2C3"]]);
            },
            i2CPortNameToVariable: function (name) {
                switch (name) {
                    case "I2C0": 
                        return "$i2c0";
                    case "I2C1": 
                        return "$i2c1";
                    case "I2C2": 
                        return "$i2c2";
                    case "I2C3": 
                        return "$i2c3";
                    default: 
                        return name;
                }
            },
            memFileHandles: function () {
                return new Blockly.FieldDropdown([["MemFile0", "MEM_FILE0"], ["MemFile1", "MEM_FILE1"]]);
            },
            memFileHandlerNameToNum: function (name) {
                switch (name) {
                    case "MEM_FILE0": 
                        return 0;
                    case "MEM_FILE1": 
                        return 1;
                    default: 
                        return -1;
                }
            },
            memOpenModeNameToNum: function (name) {
                switch (name) {
                    case "EEP_READ": 
                        return 0;
                    case "EEP_APPEND": 
                        return 1;
                    case "EEP_WRITE": 
                        return 2;
                    default: 
                        return -1;
                }
            },
            memCpModeNameToNum: function (name) {
                switch (name) {
                    case "NO_OVERWRITE": 
                        return 0;
                    case "OVERWRITE": 
                        return 1;
                    default: 
                        return -1;
                }
            },
            sdFileHandles: function () {
                return new Blockly.FieldDropdown([["SdFile0", "SD_FILE0"], ["SdFile1", "SD_FILE1"]]);
            },
            sdFileHandlerNameToNum: function (name) {
                switch (name) {
                    case "SD_FILE0": 
                        return 0;
                    case "SD_FILE1": 
                        return 1;
                    default: 
                        return -1;
                }
            },
            sdOpenModeNameToNum: function (name) {
                switch (name) {
                    case "READ": 
                        return 0;
                    case "APPEND": 
                        return 1;
                    case "NEW_CREATE": 
                        return 2;
                    default: 
                        return -1;
                }
            },
            serialPorts: function () {
                return new Blockly.FieldDropdown([["USB", "SERIAL0"], ["TX-0/RX-1", "SERIAL1"], ["TX-5/RX-6", "SERIAL2"], ["TX-7/RX-8", "SERIAL3"], ["TX-12/RX-11", "SERIAL4"], ["TX-9(26)/RX-3", "SERIAL5"]]);
            },
            serialPortNameToNum: function (name) {
                switch (name) {
                    case "SERIAL0": 
                        return 0;
                    case "SERIAL1": 
                        return 1;
                    case "SERIAL2": 
                        return 2;
                    case "SERIAL3": 
                        return 3;
                    case "SERIAL4": 
                        return 4;
                    case "SERIAL5": 
                        return 5;
                    default: 
                        return -1;
                }
            },
            serialPortNameToVariable: function (name) {
                switch (name) {
                    case "SERIAL0": 
                        return "$Serial";
                    case "SERIAL1": 
                        return "$Serial1";
                    case "SERIAL2": 
                        return "$Serial2";
                    case "SERIAL3": 
                        return "$Serial3";
                    case "SERIAL4": 
                        return "$Serial4";
                    case "SERIAL5": 
                        return "$Serial5";
                    default: 
                        return name;
                }
            }
        }
    });

    Bridge.define("WebMrbc.HexDump", {
        text: null,
        ctor: function (bytes, width) {
            this.$initialize();
            var sb = new System.Text.StringBuilder();

            for (var index = 0; index < bytes.length; index = (index + width) | 0) {
                sb.appendFormat("{0:X4} : ", index);
                sb.append(this.binBump(bytes, index, width));
                sb.appendLine(this.asciiDump(bytes, index, width));
            }

            this.text = sb.toString();
        },
        binBump: function (bytes, offset, width) {
            var sb = new System.Text.StringBuilder();

            for (var index = 0; index < width; index = (index + 1) | 0) {
                if (((index + offset) | 0) < bytes.length) {
                    sb.appendFormat("{0:X2} ", bytes[((index + offset) | 0)]);
                } else {
                    sb.append("   ");
                }
            }

            return sb.toString();
        },
        asciiDump: function (bytes, index, width) {
            var sb = new System.Text.StringBuilder();

            if (index < bytes.length) {
                width = Math.min(width, ((bytes.length - index) | 0));

                sb.append(": ");
                for (var i = 0; i < width; i = (i + 1) | 0) {
                    var b = bytes[((i + index) | 0)];
                    if (b < 32) {
                        b = 32;
                    }
                    sb.append(String.fromCharCode(b));
                }
            } else {
                sb.append(":         ");
            }

            return sb.toString();
        },
        toString: function () {
            return this.text;
        }
    });

    Bridge.define("WebMrbc.JsonClassGroupInfo", {
        classGroupCode: 0,
        description: null,
        define: null,
        classes: null,
        ctor: function (p) {
            this.$initialize();
            this.classGroupCode = p.classGroupCode;
            this.description = p.description;
            this.define = p.define;
        }
    });

    Bridge.define("WebMrbc.JsonClassInfo", {
        classCode: 0,
        description: null,
        name: null,
        define: null,
        type: null,
        classGroup: null,
        properties: null,
        ctor: function (p) {
            this.$initialize();
            this.classCode = p.classCode;
            this.description = p.description;
            this.name = p.name;
            this.define = p.define;
            this.type = p.type;
            this.classGroup = p.classGroup;
            this.properties = p.properties;
        }
    });

    Bridge.define("WebMrbc.JsonFieldInfo", {
        description: null,
        valueDescription: null,
        unitDescription: null,
        initialValue: null,
        type: null,
        identifier: null,
        primitive: false,
        isArray: false,
        arrayCount: 0,
        size: 0,
        fields: null
    });

    Bridge.define("WebMrbc.JsonObjectInfo", {
        type: null,
        parent: null,
        identifier: null,
        instanceCode: 0,
        attribute: null,
        properties: null,
        ctor: function (type, identifier) {
            this.$initialize();
            this.type = type;
            this.identifier = identifier;
            this.instanceCode = 1;
            this.attribute = "device";
            this.properties = System.Array.init(0, null);
        },
        findProperty: function (epc) {
            var $t;
            $t = Bridge.getEnumerator(this.properties);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item.propertyCode === epc) {
                    return item;
                }
            }
            return null;
        }
    });

    Bridge.define("WebMrbc.JsonObjectInfoExtention", {
        statics: {
            clone: function (obj) {
                return Bridge.merge(new WebMrbc.JsonObjectInfo(obj.type, obj.identifier), {
                    parent: obj.parent,
                    instanceCode: obj.instanceCode,
                    attribute: obj.attribute,
                    properties: Bridge.cast(System.Array.clone(obj.properties), Array)
                } );
            },
            copy: function (dst, src) {
                dst.type = src.type;
                dst.identifier = src.identifier;
                dst.parent = src.parent;
                dst.instanceCode = src.instanceCode;
                dst.attribute = src.attribute;
                dst.properties = Bridge.cast(System.Array.clone(src.properties), Array);
            }
        }
    });

    Bridge.define("WebMrbc.JsonSkeltonResult", {
        macro: null,
        declare: null,
        predefine: null,
        types: null,
        funcs: null,
        instance: null,
        define: null,
        config: null
    });

    Bridge.define("WebMrbc.Lists", {
        statics: {
            HUE: 260
        }
    });

    Bridge.define("WebMrbc.Logic", {
        statics: {
            HUE: 210
        }
    });

    Bridge.define("WebMrbc.Loops", {
        statics: {
            HUE: 120
        }
    });

    Bridge.define("WebMrbc.MainMenuView", {
        el: null,
        ctor: function () {
            this.$initialize();
            this.el = $("#main-menu");

            $("#filename").keypress($_.WebMrbc.MainMenuView.f1);

            // HACK: if don't do below, can't open submenu on Chromium on Raspberry Pi
            $(".dropdown-toggle").dropdown();
        },
        onHelp: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();

            var args = "--help";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write(System.String.concat(System.String.concat("$ mrbc ", args), "\r\n"));
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onVersion: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();

            var args = "--version";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write(System.String.concat(System.String.concat("$ mrbc ", args), "\r\n"));
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onCompileToC: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
            WebMrbc.App.module.preRun.push(WebMrbc.App.preRun);
            WebMrbc.App.module.postRun.push($_.WebMrbc.MainMenuView.f2);

            var args = "-Bmain_rb_code -o build/main_rb.c src/main.rb";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write(System.String.concat(System.String.concat("$ mrbc ", args), "\r\n"));
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onCompileToBin: function () {
            WebMrbc.App.module = WebMrbc.App.initModule();
            WebMrbc.App.module.preRun.push(WebMrbc.App.preRun);
            WebMrbc.App.module.postRun.push($_.WebMrbc.MainMenuView.f3);

            var args = "-o build/main_rb.bin src/main.rb";
            if (WebMrbc.App.term != null) {
                WebMrbc.App.term.write(System.String.concat(System.String.concat("$ mrbc ", args), "\r\n"));
            }
            WebMrbc.App.module.arguments = args.split(" ");
            mrbc(WebMrbc.App.module);
            this.onOutputMode();
        },
        onBlockMode: function () {
            $("#tabs a[href='#block-tab']").tab("show");
            $(".blocklyToolboxDiv").show();
        },
        onRubyMode: function () {
            WebMrbc.Views.ClassSelectorView.getCurrent().WebMrbc$IClassWorkspace$loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));

            var code = new System.Text.StringBuilder();
            WebMrbc.Collections.ClassWorkspaces.each(function (e) {
                if (Bridge.is(e, WebMrbc.EObjectWorkspace)) {
                    code.append(e.WebMrbc$IClassWorkspace$toCode());
                }
            });
            code.append(WebMrbc.Collections.EcnlTaskWorkspace.toCode());
            code.append(WebMrbc.Collections.MainLoopWorkspace.toCode());

            var textEditor = window["textEditor"];
            textEditor.setValue(code.toString());
            textEditor.moveCursorTo(0, 0);

            $("#tabs a[href='#ruby-tab']").tab("show");
            $(".blocklyToolboxDiv").hide();
        },
        onOutputMode: function () {
            $("#tabs a[href='#output-tab']").tab("show");
            $(".blocklyToolboxDiv").hide();
        },
        onRun: function () {
        },
        onLoadLocal: function () {
        },
        /**
         * @instance
         * @public
         * @this WebMrbc.MainMenuView
         * @memberof WebMrbc.MainMenuView
         * @return  {void}
         */
        onSave: function () {
            WebMrbc.Views.ClassSelectorView.getCurrent().WebMrbc$IClassWorkspace$loadDom(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));

            var zip = new JSZip();
            var i = 1;
            WebMrbc.Collections.ClassWorkspaces.each(function (e) {
                var xml = Blockly.Xml.workspaceToDom(e.WebMrbc$IClassWorkspace$getWorkspace());
                zip.file(System.String.concat(System.String.concat("ClassWorkspace", i), ".xml"), xml.outerHTML);
                i = (i + 1) | 0;
            });
            var blob = zip.generate({ type: "blob" });
            saveAs(blob, "Workspace.zip");
        },
        onCheck: function () {
        },
        onReset: function () {
        },
        onPreference: function () {
        },
        onSignout: function () {
        },
        onSignin: function () {
        },
        onUsername: function () {
        },
        load: function (info) {
            if (info.error != null) {
                window["errorMessage"].call(null, goog.getMsg(Blockly.Msg.VIEWS_MAIN_MENU_VIEW_LOAD_ERROR, new $_.$AnonymousType$4(info.filename, info.error)));
            } else {
                clearMessages();

                var filename = info.filename;
                if (filename.match(new RegExp("\\.xml$")) != null) {
                    if (Bridge.referenceEquals(window["blockMode"], undefined)) {
                        window["blockMode"] = true;
                    }
                    $("#tabs a[href='#block-tab']").tab("show");

                    filename = filename.replace(new RegExp("(\\.rb)?\\.xml$"), ".rb");
                    WebMrbc.App.loadXml(info.data);
                    info.data = Blockly.Ruby.workspaceToCode(Blockly.mainWorkspace);
                } else {
                    WebMrbc.Collections.ClassWorkspaces.reset();
                    Blockly.mainWorkspace.clear();

                    if (window["blockMode"]) {
                        window["blockMode"] = false;
                        $("#tabs a[href='#ruby-tab']").tab("show");

                        window["textEditor"].focus();
                    }
                }

                $("#filename").val(filename);
                window["textEditor"].getSession().getDocument().setValue(info.data);
                window["textEditor"].moveCursorTo(0, 0);
                // TODO: Window.changed -> Smalruby.Models.SourceCode.changed
                window["changed"] = false;
                WebMrbc.App.changedAfterTranslating = true;
                window["successMessage"].call(null, Blockly.Msg.VIEWS_MAIN_MENU_VIEW_LOAD_SUCCEEDED);
            }
        }
    });

    Bridge.define("$AnonymousType$4", $_, {
        $kind: "anonymous",
        ctor: function (filename, error) {
            this.filename = filename;
            this.error = error;
        },
        getfilename : function () {
            return this.filename;
        },
        geterror : function () {
            return this.error;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$4)) {
                return false;
            }
            return Bridge.equals(this.filename, o.filename) && Bridge.equals(this.error, o.error);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320468918, this.filename, this.error]);
            return h;
        },
        toJSON: function () {
            return {
                filename : this.filename,
                error : this.error
            };
        }
    });

    Bridge.ns("WebMrbc.MainMenuView", $_);

    Bridge.apply($_.WebMrbc.MainMenuView, {
        f1: function (e) {
            if (e == null) {
                e = window["event"];
            }
            if (e.keyCode === 13) {
                $("#save-button").click();
                return false;
            } else {
                return true;
            }
        },
        f2: function () {
            var FS = WebMrbc.App.module.getFileSystem();

            var stt = FS.stat("build/main_rb.c");
            var stream = FS.open("build/main_rb.c", "r");
            var buf = new Uint8Array(stt.size);
            FS.read(stream, buf, 0, stt.size, 0);
            FS.close(stream);

            var element = Bridge.cast(document.getElementById("output"), HTMLTextAreaElement);
            element.value = System.String.concat(WebMrbc.App.module.UTF8ArrayToString(buf, 0), "\n");
            element.scrollTop = element.scrollHeight; // focus on bottom
        },
        f3: function () {
            var FS = WebMrbc.App.module.getFileSystem();

            var stt = FS.stat("build/main_rb.bin");
            var stream = FS.open("build/main_rb.bin", "r");
            var buf = new Uint8Array(stt.size);
            FS.read(stream, buf, 0, stt.size, 0);
            FS.close(stream);

            var element = Bridge.cast(document.getElementById("output"), HTMLTextAreaElement);
            element.value = (new WebMrbc.HexDump(buf, 16)).toString();
            element.scrollTop = element.scrollHeight; // focus on bottom
        }
    });

    Bridge.define("WebMrbc.Math", {
        statics: {
            HUE: 230
        }
    });

    Bridge.define("WebMrbc.State", {
        $kind: "enum",
        statics: {
            Value: 0,
            EqualOrRange: 1,
            Description: 2,
            UnitOrCommaOrEnd: 3,
            RengeMax: 4,
            StartParenthesis: 5,
            RangeDescription: 6,
            MinDescription: 7,
            RangeSeparetor: 8,
            MaxDescription: 9,
            EndParenthesis: 10,
            CommaOrEnd: 11,
            BitFieldLSB: 12,
            BitRange: 13,
            BitFieldMSB: 14,
            BitFieldDescription: 15,
            BitRangeEnd: 16,
            Colon: 17
        }
    });

    Bridge.define("WebMrbc.Texts", {
        statics: {
            HUE: 160
        }
    });

    Bridge.define("WebMrbc.TokenInfo", {
        statics: {
            separetor: "[=,:\\(\\)\\[\\]～]",
            hexValue: "^0x[0-9A-Fa-f]+",
            numeric: "^[\\-\\+]?[\\.]?[0-9]+[0-9,\\.]*"
        },
        token: null,
        type: 0,
        ctor: function (token, type) {
            this.$initialize();
            this.token = token;
            this.type = type;
        },
        toString: function () {
            return this.token;
        },
        toInt32: function () {
            switch (this.type) {
                case WebMrbc.TokenType.HexValue: 
                    return parseInt(this.token.substr(2), 16);
                case WebMrbc.TokenType.Numeric: 
                    return parseInt(this.token);
                default: 
                    return 0;
            }
        },
        toInt64: function (typeName) {
            var temp;

            switch (this.type) {
                case WebMrbc.TokenType.HexValue: 
                    temp = this.token.substr(2);
                    return System.Int64(parseInt(temp, 16));
                case WebMrbc.TokenType.Numeric: 
                    return System.Int64(parseInt(this.token));
                default: 
                    return System.Int64(0);
            }
        }
    });

    Bridge.define("WebMrbc.TokenType", {
        $kind: "enum",
        statics: {
            Separetor: 0,
            HexValue: 1,
            Numeric: 2,
            String: 3,
            End: 4
        }
    });

    Bridge.define("WebMrbc.ValueRange", {
        statics: {
            _ParsedText: null,
            config: {
                init: function () {
                    this._ParsedText = new (System.Collections.Generic.Dictionary$2(String,WebMrbc.ValueSet))();
                }
            },
            parseValueRange: function (input, type, values, ranges, bitFeild, initialValue) {
                var $t;
                bitFeild.v = null;
                initialValue.v = null;

                var tokens = System.Array.init(0, null);
                var pos = 0;
                while (pos < input.length) {
                    var ms;
                    var m;
                    if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.hexValue))).exec(input.substr(pos)))) != null) {
                        tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.HexValue));
                        pos = (pos + m[0].length) | 0;
                    } else if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.numeric))).exec(input.substr(pos)))) != null) {
                        tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Numeric));
                        pos = (pos + m[0].length) | 0;
                    } else {
                        if (((m = ((ms = new RegExp(WebMrbc.TokenInfo.separetor))).exec(input.substr(pos)))) == null) {
                            tokens.push(new WebMrbc.TokenInfo(input.substr(pos), WebMrbc.TokenType.String));
                            break;
                        }
                        var index = (pos + m.index) | 0;
                        if (index === pos) {
                            tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Separetor));
                            pos = (pos + 1) | 0;
                        } else {
                            tokens.push(new WebMrbc.TokenInfo(input.substr(pos, ((index - pos) | 0)), WebMrbc.TokenType.String));
                            tokens.push(new WebMrbc.TokenInfo(m[0], WebMrbc.TokenType.Separetor));
                            pos = (index + 1) | 0;
                        }
                    }
                }
                tokens.push(new WebMrbc.TokenInfo("", WebMrbc.TokenType.End));

                var OK = false;
                var sentence = System.Array.init(0, null);
                var state = WebMrbc.State.Value;
                $t = Bridge.getEnumerator(tokens);
                while ($t.moveNext()) {
                    var token = $t.getCurrent();
                    switch (state) {
                        case WebMrbc.State.Value: 
                            if ((token.type === WebMrbc.TokenType.HexValue) || (token.type === WebMrbc.TokenType.Numeric)) {
                                sentence.push(token);
                                state = WebMrbc.State.EqualOrRange;
                                continue;
                            } else if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "["))) {
                                if (bitFeild.v != null) {
                                    break;
                                }
                                state = WebMrbc.State.BitFieldLSB;
                                continue;
                            }
                            break;
                        case WebMrbc.State.EqualOrRange: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "=": 
                                        state = WebMrbc.State.Description;
                                        continue;
                                    case "～": 
                                        state = WebMrbc.State.RengeMax;
                                        continue;
                                }
                            } else if (token.type === WebMrbc.TokenType.End) {
                                var option = new WebMrbc.Option(sentence[0].toInt64(type), "固定");
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = option;
                                    }
                                    values.push(option);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            }
                            break;
                        case WebMrbc.State.Description: 
                            if (token.type === WebMrbc.TokenType.String) {
                                var option1 = new WebMrbc.Option(sentence[0].toInt64(type), token.token);
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option1);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = option1;
                                    }
                                    values.push(option1);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            } else if (token.type === WebMrbc.TokenType.Numeric) {
                                sentence.push(token);
                                state = WebMrbc.State.UnitOrCommaOrEnd;
                                continue;
                            }
                            break;
                        case WebMrbc.State.UnitOrCommaOrEnd: 
                            if (token.type === WebMrbc.TokenType.String) {
                                var option2 = new WebMrbc.Option(sentence[0].toInt64(type), System.String.concat(sentence[1].token, token.token));
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option2);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = option2;
                                    }
                                    values.push(option2);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            } else if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ","))) {
                                var option3 = new WebMrbc.Option(sentence[0].toInt64(type), sentence[1].token);
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option3);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = option3;
                                    }
                                    values.push(option3);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.Value;
                                continue;
                            } else if (token.type === WebMrbc.TokenType.End) {
                                var option4 = new WebMrbc.Option(sentence[0].toInt64(type), sentence[1].token);
                                if (bitFeild.v != null) {
                                    bitFeild.v.addValue(option4);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = option4;
                                    }
                                    values.push(option4);
                                }
                                sentence.splice(0, sentence.length);
                                OK = true;
                            }
                            break;
                        case WebMrbc.State.RengeMax: 
                            if ((token.type === WebMrbc.TokenType.HexValue) || (token.type === WebMrbc.TokenType.Numeric)) {
                                sentence.push(token);
                                state = WebMrbc.State.StartParenthesis;
                                continue;
                            } else if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "="))) {
                                var max = "0x";
                                for (var i = (sentence[0].token.length - 2) | 0; i > 0; i = (i - 1) | 0) {
                                    max = System.String.concat(max, "F");
                                }
                                sentence.push(new WebMrbc.TokenInfo(max, WebMrbc.TokenType.HexValue));
                                state = WebMrbc.State.RangeDescription;
                                continue;
                            }
                            break;
                        case WebMrbc.State.StartParenthesis: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "=": 
                                        if (sentence.length === 2) {
                                            state = WebMrbc.State.RangeDescription;
                                            continue;
                                        }
                                        break;
                                    case "(": 
                                        sentence.push(new WebMrbc.TokenInfo("", WebMrbc.TokenType.String));
                                        state = WebMrbc.State.MinDescription;
                                        continue;
                                    case ",": 
                                        var range = new WebMrbc.Range.ctor(sentence[0].toInt64(type), sentence[1].toInt64(type), (sentence.length > 2) ? sentence[2].token : "");
                                        if (bitFeild.v != null) {
                                            bitFeild.v.addRange(range);
                                        } else {
                                            if (initialValue.v == null) {
                                                initialValue.v = range;
                                            }
                                            ranges.push(range);
                                        }
                                        sentence.splice(0, sentence.length);
                                        state = WebMrbc.State.Value;
                                        continue;
                                }
                            } else if (token.type === WebMrbc.TokenType.End) {
                                var range1 = new WebMrbc.Range.ctor(sentence[0].toInt64(type), sentence[1].toInt64(type), (sentence.length > 2) ? sentence[2].token : "");
                                if (bitFeild.v != null) {
                                    bitFeild.v.addRange(range1);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = range1;
                                    }
                                    ranges.push(range1);
                                }
                                sentence.splice(0, sentence.length);
                                OK = true;
                            }
                            break;
                        case WebMrbc.State.RangeDescription: 
                            if (token.type === WebMrbc.TokenType.String) {
                                sentence.push(token);
                                state = WebMrbc.State.StartParenthesis;
                                continue;
                            }
                            break;
                        case WebMrbc.State.MinDescription: 
                            if ((token.type === WebMrbc.TokenType.Numeric) || (token.type === WebMrbc.TokenType.String)) {
                                sentence.push(token);
                                state = WebMrbc.State.RangeSeparetor;
                                continue;
                            }
                            break;
                        case WebMrbc.State.RangeSeparetor: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "～"))) {
                                state = WebMrbc.State.MaxDescription;
                                continue;
                            }
                            break;
                        case WebMrbc.State.MaxDescription: 
                            if ((token.type === WebMrbc.TokenType.Numeric) || (token.type === WebMrbc.TokenType.String)) {
                                sentence.push(token);
                                state = WebMrbc.State.EndParenthesis;
                                continue;
                            }
                            break;
                        case WebMrbc.State.EndParenthesis: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ")"))) {
                                var range2 = new WebMrbc.Range.$ctor1(sentence[0].toInt64(type), sentence[1].toInt64(type), sentence[2].token, sentence[3].token, sentence[4].token, (sentence.length > 5) ? sentence[5].token : "");
                                if (bitFeild.v != null) {
                                    bitFeild.v.addRange(range2);
                                } else {
                                    if (initialValue.v == null) {
                                        initialValue.v = range2;
                                    }
                                    ranges.push(range2);
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.CommaOrEnd;
                                continue;
                            } else if (token.type === WebMrbc.TokenType.String) {
                                sentence.push(token);
                                state = WebMrbc.State.EndParenthesis;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitFieldLSB: 
                            if (token.type === WebMrbc.TokenType.Numeric) {
                                sentence.push(token);
                                state = WebMrbc.State.BitRange;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitRange: 
                            if (token.type === WebMrbc.TokenType.Separetor) {
                                switch (token.token) {
                                    case "～": 
                                        state = WebMrbc.State.BitFieldMSB;
                                        continue;
                                    case "]": 
                                        sentence.push(sentence[0]);
                                        state = WebMrbc.State.BitFieldDescription;
                                        continue;
                                }
                            }
                            break;
                        case WebMrbc.State.BitFieldMSB: 
                            if (token.type === WebMrbc.TokenType.Numeric) {
                                sentence.push(token);
                                state = WebMrbc.State.BitRangeEnd;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitRangeEnd: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, "]"))) {
                                state = WebMrbc.State.BitFieldDescription;
                                continue;
                            }
                            break;
                        case WebMrbc.State.BitFieldDescription: 
                            if (token.type === WebMrbc.TokenType.String) {
                                sentence.push(token);
                                state = WebMrbc.State.Colon;
                                continue;
                            }
                            break;
                        case WebMrbc.State.Colon: 
                            if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ":"))) {
                                bitFeild.v = new WebMrbc.BitField(sentence[0].toInt32(), sentence[1].toInt32(), sentence[2].token);
                                if (initialValue.v == null) {
                                    initialValue.v = bitFeild.v;
                                }
                                sentence.splice(0, sentence.length);
                                state = WebMrbc.State.Value;
                                continue;
                            } else if (token.type === WebMrbc.TokenType.End) {
                                bitFeild.v = new WebMrbc.BitField(sentence[0].toInt32(), sentence[1].toInt32(), sentence[2].token);
                                if (initialValue.v == null) {
                                    initialValue.v = bitFeild.v;
                                }
                                sentence.splice(0, sentence.length);
                                OK = true;
                                break;
                            }
                            break;
                        case WebMrbc.State.CommaOrEnd: 
                            if (token.type === WebMrbc.TokenType.End) {
                                OK = true;
                            } else if ((token.type === WebMrbc.TokenType.Separetor) && (Bridge.referenceEquals(token.token, ","))) {
                                state = WebMrbc.State.Value;
                                continue;
                            }
                            break;
                    }
                    break;
                }

                return OK;
            },
            parse: function (valrng, emti) {
                var $t, $t1;
                var valueRange = new WebMrbc.ValueRange();

                if (emti.primitive) {
                    var lines = valrng.split(new RegExp("\r\n"));
                    $t = Bridge.getEnumerator(lines);
                    while ($t.moveNext()) {
                        var line = $t.getCurrent();
                        if (new RegExp("^<(.+)>$").test(line)) {
                            continue;
                        }

                        var values;
                        var ranges;
                        var bitField = { };
                        var initialValue = { };

                        var pair = { };
                        if (WebMrbc.ValueRange._ParsedText.tryGetValue(line, pair)) {
                            values = pair.v.values;
                            ranges = pair.v.ranges;
                            bitField.v = pair.v.bitField;
                            initialValue.v = pair.v.initialValue;
                        } else {
                            values = System.Array.init(0, null);
                            ranges = System.Array.init(0, null);

                            WebMrbc.ValueRange.parseValueRange(line, emti.type, values, ranges, bitField, initialValue);

                            WebMrbc.ValueRange._ParsedText.add(line, new WebMrbc.ValueSet(values, ranges, bitField.v, initialValue.v));
                        }

                        valueRange._Values = Bridge.cast(valueRange._Values.concat.apply(valueRange._Values, values), Array);
                        valueRange._Ranges = Bridge.cast(valueRange._Ranges.concat.apply(valueRange._Ranges, ranges), Array);
                        if (bitField.v != null) {
                            valueRange._BitFields.push(bitField.v);
                        }
                        if (valueRange._InitailValue == null) {
                            valueRange._InitailValue = initialValue.v;
                        }
                    }
                } else {
                    $t1 = Bridge.getEnumerator(emti.fields);
                    while ($t1.moveNext()) {
                        var efi = $t1.getCurrent();
                        var member = WebMrbc.ValueRange.parse(efi.valueDescription, efi);
                        valueRange._MemberFields.push(member);
                    }
                }

                return valueRange;
            }
        },
        _Values: null,
        _Ranges: null,
        _BitFields: null,
        _MemberFields: null,
        _InitailValue: null,
        config: {
            init: function () {
                this._Values = System.Array.init(0, null);
                this._Ranges = System.Array.init(0, null);
                this._BitFields = System.Array.init(0, null);
                this._MemberFields = System.Array.init(0, null);
            }
        },
        getValues: function () {
            return this._Values;
        },
        getRanges: function () {
            return this._Ranges;
        },
        getBitFields: function () {
            return this._BitFields;
        },
        getMemberFields: function () {
            return this._MemberFields;
        },
        getInitailValue: function () {
            if (this._InitailValue == null) {
                return "";
            }
            return this._InitailValue.getInitialValue();
        },
        setInitailValue: function (value) {
            var $t, $t1, $t2;
            var val64 = parseInt(value);
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(System.Int64(val64))) {
                    continue;
                }

                this._InitailValue = val;
                return;
            }

            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(System.Int64(val64))) || (rng.getMax().lt(System.Int64(val64)))) {
                    continue;
                }

                this._InitailValue = new WebMrbc.InRangeValue(rng, System.Int64(val64));
                return;
            }

            if (this._BitFields.length > 0) {
                var ok = true;
                var bitFlds = System.Array.init(0, null);
                $t2 = Bridge.getEnumerator(this._BitFields);
                while ($t2.moveNext()) {
                    var bit = $t2.getCurrent();
                    if (!bit.isInRange(System.Int64(val64))) {
                        ok = false;
                        break;
                    }

                    bitFlds.push(bit.getInRangeValue(System.Int64(val64)));
                }

                if (ok) {
                    this._InitailValue = new WebMrbc.BitFiledsValue(this._BitFields, bitFlds, System.Int64(val64));
                    return;
                }
            }
        }
    });

    Bridge.define("WebMrbc.ValueSet", {
        values: null,
        ranges: null,
        bitField: null,
        initialValue: null,
        ctor: function (values, ranges, bitField, initialValue) {
            this.$initialize();
            this.values = values;
            this.ranges = ranges;
            this.bitField = bitField;
            this.initialValue = initialValue;
        }
    });

    Bridge.define("WebMrbc.Variables", {
        statics: {
            HUE: 330
        }
    });

    Bridge.define("WebMrbc.Views", {
        statics: {
            ClassSelectorView: null,
            MainMenuView: null,
            EObjectModalView: null
        }
    });

    Bridge.define("WebMrbc.AnalogDacBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("アナログDAC出力");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.AnalogReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("アナログリード").appendField(WebMrbc.GrSakura.analogPins(), "PIN_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.AnalogReferenceBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("アナログ入力基準電圧").appendField(new Blockly.FieldDropdown([["5.0V Arduino互換", "DEFAULT"], ["1.1V 内蔵電圧", "INTERNAL"], ["AVREFピン供給電圧", "EXTERNAL"], ["3.3V 12ビットA/D変換を行う", "RAW12BIT"]]), "ANALOG_REFERENCE_MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.BitBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("Bit 7").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT7").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT6").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT5").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT4").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT3").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT2").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT1").appendField(new Blockly.FieldCheckbox("FALSE"), "BIT0").appendField("0");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.BitField", {
        inherits: [WebMrbc.Value],
        _Least: 0,
        _Most: 0,
        _Disp: null,
        _Values: null,
        _Ranges: null,
        _InitailValue: null,
        config: {
            init: function () {
                this._Values = System.Array.init(0, null);
                this._Ranges = System.Array.init(0, null);
            }
        },
        ctor: function (least, most, disp) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._Least = least;
            this._Most = most;
            this._Disp = disp;
        },
        getLeast: function () {
            return this._Least;
        },
        getMost: function () {
            return this._Most;
        },
        getDisp: function () {
            return this._Disp;
        },
        getValues: function () {
            return this._Values;
        },
        getRanges: function () {
            return this._Ranges;
        },
        getInitailValue: function () {
            return this._InitailValue;
        },
        getInitialValue: function () {
            if (this._InitailValue == null) {
                return "";
            }
            return this._InitailValue.getInitialValue();
        },
        addValue: function (option) {
            if (this._InitailValue == null) {
                this._InitailValue = option;
            }
            this._Values.push(option);
        },
        addRange: function (range) {
            if (this._InitailValue == null) {
                this._InitailValue = range;
            }
            this._Ranges.push(range);
        },
        isInRange: function (val64) {
            var $t, $t1;
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(val64)) {
                    continue;
                }

                return true;
            }

            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(val64)) || (rng.getMax().lt(val64))) {
                    continue;
                }

                return true;
            }

            return false;
        },
        getInRangeValue: function (val64) {
            var $t, $t1;
            $t = Bridge.getEnumerator(this._Values);
            while ($t.moveNext()) {
                var val = $t.getCurrent();
                if (val.getVal().ne(val64)) {
                    continue;
                }

                return val;
            }

            $t1 = Bridge.getEnumerator(this._Ranges);
            while ($t1.moveNext()) {
                var rng = $t1.getCurrent();
                if ((rng.getMin().gt(val64)) || (rng.getMax().lt(val64))) {
                    continue;
                }

                return new WebMrbc.InRangeValue(rng, val64);
            }

            return null;
        }
    });

    Bridge.define("WebMrbc.BitFiledsValue", {
        inherits: [WebMrbc.Value],
        _BitFields: null,
        _BitFieldValues: null,
        _Value: System.Int64(0),
        ctor: function (bitFlds, bitFldVals, value) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._BitFields = bitFlds;
            this._BitFieldValues = bitFldVals;
            this._Value = value;
        },
        getDisp: function () {
            return "";
        },
        getInitialValue: function () {
            return this._Value.toString(16).toUpperCase();
        }
    });

    Bridge.define("WebMrbc.BpsValueBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldDropdown([["115.2kbps", "115200"], ["57.6kbps", "57600"], ["38.4kbps", "38400"], ["31.25kbps", "31250"], ["28.8kbps", "28800"], ["19.2kbps", "19200"], ["14.4kbps", "14400"], ["9.6kbps", "9600"], ["4.8kbps", "4800"], ["2.4kbps", "2400"], ["1.2kbps", "1200"], ["600bps", "600"], ["300bps", "300"]]), "VALUE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.CallBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("RET").setCheck(null).appendField("呼び出し");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.Collection$1", function (T) { return {
        list: null,
        onAdd: null,
        onRemove: null,
        onReset: null,
        onChange: null,
        config: {
            init: function () {
                this.list = System.Array.init(0, function (){
        return Bridge.getDefaultValue(T);
    });
            }
        },
        getLastModel: function () {
            var i = this.list.length;
            if (i === 0) {
                return Bridge.getDefaultValue(T);
            }
            return this.list[((i - 1) | 0)];
        },
        getLength: function () {
            return this.list.length;
        },
        add: function (eobject) {
            this.list.push(eobject);

            if (!Bridge.staticEquals(this.onAdd, null)) {
                this.onAdd(this, Object.empty);
            }
        },
        remove: function (eobject) {
            var i = Bridge.Linq.Enumerable.from(this.list).indexOf(eobject);
            if (i >= 0) {
                this.list.splice(i, 1);
            }

            if (!Bridge.staticEquals(this.onRemove, null)) {
                this.onRemove(this, Object.empty);
            }
        },
        reset: function () {
            this.list.splice(0, this.list.length);

            if (!Bridge.staticEquals(this.onReset, null)) {
                this.onReset(this, Object.empty);
            }
        },
        reset$1: function (n) {
            this.list.splice(0, this.list.length);
            this.list = Bridge.cast(this.list.concat(n), Array);

            if (!Bridge.staticEquals(this.onReset, null)) {
                this.onReset(this, Object.empty);
            }
        },
        at: function (index) {
            return this.list[index];
        },
        uniqueName: function (identifier) {
            var $t;
            var prefix = identifier;
            var max = 0;
            var n = new RegExp(System.String.concat(System.String.concat("^", prefix), "([0-9]+)$"));
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                var m = c.WebMrbc$IModel$getIdentifier().match(n);
                if (m != null) {
                    max = Math.max(max, parseInt(m[0]));
                }
                break;
            }
            return System.String.concat(System.String.concat("", prefix), (((max + 1) | 0)));
        },
        findWhere: function (p) {
            var $t;
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                if ((function(c) { for (var i in p) if (p[i] !== c[i]) return false; return true; })(c)) {
                    return c;
                }
            }
            return Bridge.getDefaultValue(T);
        },
        each: function (cb) {
            var $t;
            $t = Bridge.getEnumerator(this.list);
            while ($t.moveNext()) {
                var c = $t.getCurrent();
                cb(c);
            }
        }
    }; });

    Bridge.define("WebMrbc.ColourBlendBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL);
            this.setColour(WebMrbc.Colour.HUE);
            this.appendValueInput("COLOUR1").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_TITLE).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1);
            this.appendValueInput("COLOUR2").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2);
            this.appendValueInput("RATIO").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_RATIO);
            this.setOutput(true, "Colour");
            this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP);
        }
    });

    Bridge.define("WebMrbc.ColourPickerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$5("%1", [new $_.$AnonymousType$6("field_colour", "COLOUR", "#ff0000")], "Colour", WebMrbc.Colour.HUE, Blockly.Msg.COLOUR_PICKER_HELPURL));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            // Colour block is trivial.  Use tooltip of parent block if it exists.
            this.setTooltip(function () {
                var parent = thisBlock.getParent();
                return (parent != null && parent.getInputsInline() && !System.String.isNullOrEmpty(parent.tooltip)) ? parent.tooltip : Blockly.Msg.COLOUR_PICKER_TOOLTIP;
            });
        }
    });

    Bridge.define("$AnonymousType$5", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, output, colour, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.output = output;
            this.colour = colour;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$5)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320534454, this.message0, this.args0, this.output, this.colour, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                output : this.output,
                colour : this.colour,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("$AnonymousType$6", $_, {
        $kind: "anonymous",
        ctor: function (type, name, colour) {
            this.type = type;
            this.name = name;
            this.colour = colour;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getcolour : function () {
            return this.colour;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$6)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.colour, o.colour);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320599990, this.type, this.name, this.colour]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                colour : this.colour
            };
        }
    });

    Bridge.define("WebMrbc.ColourRandomBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$7(Blockly.Msg.COLOUR_RANDOM_TITLE, "Colour", WebMrbc.Colour.HUE, Blockly.Msg.COLOUR_RANDOM_TOOLTIP, Blockly.Msg.COLOUR_RANDOM_HELPURL));
        }
    });

    Bridge.define("$AnonymousType$7", $_, {
        $kind: "anonymous",
        ctor: function (message0, output, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.output = output;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$7)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320665526, this.message0, this.output, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                output : this.output,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.ColourRGBBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);
            this.setColour(WebMrbc.Colour.HUE);
            this.appendValueInput("RED").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_TITLE).appendField(Blockly.Msg.COLOUR_RGB_RED);
            this.appendValueInput("GREEN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_GREEN);
            this.appendValueInput("BLUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_BLUE);
            this.setOutput(true, "Colour");
            this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP);
        }
    });

    Bridge.define("WebMrbc.ControlsFlowStatementsBlock", {
        inherits: [WebMrbc.Block],
        LOOP_TYPES: null,
        config: {
            init: function () {
                this.LOOP_TYPES = ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"];
            }
        },
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"], [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]];
            this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL);
            this.setColour(WebMrbc.Loops.HUE);
            this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "FLOW");
            this.setPreviousStatement(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("FLOW")) {
                    case "BREAK": 
                        return Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK;
                    case "CONTINUE": 
                        return Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE;
                }
                return "";
            });
        },
        onchange: function (e) {
            var legal = false;
            // Is the block nested in a loop?
            var block = Bridge.cast(this, WebMrbc.Block);
            do {
                if (this.LOOP_TYPES.indexOf(block.type) !== -1) {
                    legal = true;
                    break;
                }
                block = block.getSurroundParent();
            } while (block != null);
            if (legal) {
                this.setWarningText(null);
            } else {
                this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
            }
        }
    });

    Bridge.define("WebMrbc.ControlsForBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$8(Blockly.Msg.CONTROLS_FOR_TITLE, [new $_.$AnonymousType$9("field_variable", "VAR", null), new $_.$AnonymousType$10("input_value", "FROM", "Number", "RIGHT"), new $_.$AnonymousType$10("input_value", "TO", "Number", "RIGHT"), new $_.$AnonymousType$10("input_value", "BY", "Number", "RIGHT")], true, null, null, WebMrbc.Loops.HUE, Blockly.Msg.CONTROLS_FOR_HELPURL));
            this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                return System.String.replaceAll(Blockly.Msg.CONTROLS_FOR_TOOLTIP, "%1", thisBlock.getFieldValue("VAR"));
            });
        },
        customContextMenu: function (options) {
            if (!this.isCollapsed()) {
                var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                    enabled: true
                } );
                var name = this.getFieldValue("VAR");
                option.text = System.String.replaceAll(Blockly.Msg.VARIABLES_SET_CREATE_GET, "%1", name);
                var xmlField = goog.dom.createDom("field", null, name);
                xmlField.setAttribute("name", "VAR");
                var xmlBlock = goog.dom.createDom("block", null, xmlField);
                xmlBlock.setAttribute("type", "variables_get");
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    });

    Bridge.define("$AnonymousType$8", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, inputsInline, previousStatement, nextStatement, colour, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.inputsInline = inputsInline;
            this.previousStatement = previousStatement;
            this.nextStatement = nextStatement;
            this.colour = colour;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getinputsInline : function () {
            return this.inputsInline;
        },
        getpreviousStatement : function () {
            return this.previousStatement;
        },
        getnextStatement : function () {
            return this.nextStatement;
        },
        getcolour : function () {
            return this.colour;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$8)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.inputsInline, o.inputsInline) && Bridge.equals(this.previousStatement, o.previousStatement) && Bridge.equals(this.nextStatement, o.nextStatement) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320731062, this.message0, this.args0, this.inputsInline, this.previousStatement, this.nextStatement, this.colour, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                inputsInline : this.inputsInline,
                previousStatement : this.previousStatement,
                nextStatement : this.nextStatement,
                colour : this.colour,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("$AnonymousType$9", $_, {
        $kind: "anonymous",
        ctor: function (type, name, variable) {
            this.type = type;
            this.name = name;
            this.variable = variable;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getvariable : function () {
            return this.variable;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$9)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.variable, o.variable);
        },
        getHashCode: function () {
            var h = Bridge.addHash([6320796598, this.type, this.name, this.variable]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                variable : this.variable
            };
        }
    });

    Bridge.define("$AnonymousType$10", $_, {
        $kind: "anonymous",
        ctor: function (type, name, check, align) {
            this.type = type;
            this.name = name;
            this.check = check;
            this.align = align;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getcheck : function () {
            return this.check;
        },
        getalign : function () {
            return this.align;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$10)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.check, o.check) && Bridge.equals(this.align, o.align);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7125578678, this.type, this.name, this.check, this.align]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                check : this.check,
                align : this.align
            };
        }
    });

    Bridge.define("WebMrbc.ControlsForEachBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$11(Blockly.Msg.CONTROLS_FOREACH_TITLE, [new $_.$AnonymousType$9("field_variable", "VAR", null), new $_.$AnonymousType$12("input_value", "LIST", "Array")], null, null, WebMrbc.Loops.HUE, Blockly.Msg.CONTROLS_FOREACH_HELPURL));
            this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                return System.String.replaceAll(Blockly.Msg.CONTROLS_FOREACH_TOOLTIP, "%1", thisBlock.getFieldValue("VAR"));
            });
        },
        customContextMenu: function (options) {
            if (!this.isCollapsed()) {
                var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                    enabled: true
                } );
                var name = this.getFieldValue("VAR");
                option.text = System.String.replaceAll(Blockly.Msg.VARIABLES_SET_CREATE_GET, "%1", name);
                var xmlField = goog.dom.createDom("field", null, name);
                xmlField.setAttribute("name", "VAR");
                var xmlBlock = goog.dom.createDom("block", null, xmlField);
                xmlBlock.setAttribute("type", "variables_get");
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    });

    Bridge.define("$AnonymousType$11", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, previousStatement, nextStatement, colour, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.previousStatement = previousStatement;
            this.nextStatement = nextStatement;
            this.colour = colour;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getpreviousStatement : function () {
            return this.previousStatement;
        },
        getnextStatement : function () {
            return this.nextStatement;
        },
        getcolour : function () {
            return this.colour;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$11)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.previousStatement, o.previousStatement) && Bridge.equals(this.nextStatement, o.nextStatement) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7142355894, this.message0, this.args0, this.previousStatement, this.nextStatement, this.colour, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                previousStatement : this.previousStatement,
                nextStatement : this.nextStatement,
                colour : this.colour,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("$AnonymousType$12", $_, {
        $kind: "anonymous",
        ctor: function (type, name, check) {
            this.type = type;
            this.name = name;
            this.check = check;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getcheck : function () {
            return this.check;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$12)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.check, o.check);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7159133110, this.type, this.name, this.check]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                check : this.check
            };
        }
    });

    Bridge.define("WebMrbc.ControlsIfBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
            this.setColour(WebMrbc.Logic.HUE);
            this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
            this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                if (thisBlock.elseifCount_ === 0 && thisBlock.elseCount_ === 0) {
                    return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
                } else if (thisBlock.elseifCount_ === 0 && thisBlock.elseCount_ !== 0) {
                    return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
                } else if (thisBlock.elseifCount_ !== 0 && thisBlock.elseCount_ === 0) {
                    return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
                } else if (thisBlock.elseifCount_ !== 0 && thisBlock.elseCount_ !== 0) {
                    return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
                }
                return "";
            });
            this.elseifCount_ = 0;
            this.elseCount_ = 0;
        },
        mutationToDom: function () {
            if (this.elseifCount_ === 0 && this.elseCount_ === 0) {
                return null;
            }
            var container = document.createElement("mutation");
            if (this.elseifCount_ !== 0) {
                container.setAttribute("elseif", this.elseifCount_.toString());
            }
            if (this.elseCount_ !== 0) {
                container.setAttribute("else", "1");
            }
            return container;
        },
        domToMutation: function (xmlElement) {
            this.elseifCount_ = parseInt(xmlElement.getAttribute("elseif"), 10);
            this.elseCount_ = parseInt(xmlElement.getAttribute("else"), 10);
            this.updateShape_();
        },
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("controls_if_if");
            containerBlock.initSvg();
            var connection = containerBlock.nextConnection;
            for (var i = 1; i <= this.elseifCount_; i = (i + 1) | 0) {
                var elseifBlock = workspace.newBlock("controls_if_elseif");
                elseifBlock.initSvg();
                connection.connect(elseifBlock.previousConnection);
                connection = elseifBlock.nextConnection;
            }
            if (this.elseCount_ !== 0) {
                var elseBlock = workspace.newBlock("controls_if_else");
                elseBlock.initSvg();
                connection.connect(elseBlock.previousConnection);
            }
            return containerBlock;
        },
        compose: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            // Count number of inputs.
            this.elseifCount_ = 0;
            this.elseCount_ = 0;
            var valueConnections = [null];
            var statementConnections = [null];
            var elseStatementConnection = null;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "controls_if_elseif": 
                        this.elseifCount_ = (this.elseifCount_ + 1) | 0;
                        valueConnections.push(clauseBlock.valueConnection_);
                        statementConnections.push(clauseBlock.statementConnection_);
                        break;
                    case "controls_if_else": 
                        this.elseCount_ = (this.elseCount_ + 1) | 0;
                        elseStatementConnection = clauseBlock.statementConnection_;
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i = 1; i <= this.elseifCount_; i = (i + 1) | 0) {
                Blockly.Mutator.reconnect(valueConnections[i], this, System.String.concat("IF", i));
                Blockly.Mutator.reconnect(statementConnections[i], this, System.String.concat("DO", i));
            }
            Blockly.Mutator.reconnect(elseStatementConnection, this, "ELSE");
        },
        saveConnections: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            var i = 1;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "controls_if_elseif": 
                        {
                            var inputIf = this.getInput(System.String.concat("IF", i));
                            var inputDo = this.getInput(System.String.concat("DO", i));
                            clauseBlock.valueConnection_ = (inputIf != null) ? inputIf.connection.targetConnection : null;
                            clauseBlock.statementConnection_ = (inputDo != null) ? inputDo.connection.targetConnection : null;
                            i = (i + 1) | 0;
                        }
                        break;
                    case "controls_if_else": 
                        {
                            var inputDo1 = this.getInput("ELSE");
                            clauseBlock.statementConnection_ = (inputDo1 != null) ? inputDo1.connection.targetConnection : null;
                        }
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
        },
        updateShape_: function () {
            // Delete everything.
            if (this.getInput("ELSE") != null) {
                this.removeInput("ELSE");
            }
            var i = 1;
            while (this.getInput(System.String.concat("IF", i)) != null) {
                this.removeInput(System.String.concat("IF", i));
                this.removeInput(System.String.concat("DO", i));
                i = (i + 1) | 0;
            }
            // Rebuild block.
            for (i = 1; i <= this.elseifCount_; i = (i + 1) | 0) {
                this.appendValueInput(System.String.concat("IF", i)).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
                this.appendStatementInput(System.String.concat("DO", i)).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
            }
            if (this.elseCount_ !== 0) {
                this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
            }
        }
    });

    Bridge.define("WebMrbc.ControlsIfElseBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Logic.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
            this.setPreviousStatement(true);
            this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ControlsIfElseIfBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Logic.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ControlsIfIfBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Logic.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ControlsRepeatBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13(Blockly.Msg.CONTROLS_REPEAT_TITLE, [new $_.$AnonymousType$14("field_number", "TIMES", 10, 0, 1)], null, null, WebMrbc.Loops.HUE, Blockly.Msg.CONTROLS_REPEAT_TOOLTIP, Blockly.Msg.CONTROLS_REPEAT_HELPURL));
            this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        }
    });

    Bridge.define("$AnonymousType$13", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, previousStatement, nextStatement, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.previousStatement = previousStatement;
            this.nextStatement = nextStatement;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getpreviousStatement : function () {
            return this.previousStatement;
        },
        getnextStatement : function () {
            return this.nextStatement;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$13)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.previousStatement, o.previousStatement) && Bridge.equals(this.nextStatement, o.nextStatement) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7175910326, this.message0, this.args0, this.previousStatement, this.nextStatement, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                previousStatement : this.previousStatement,
                nextStatement : this.nextStatement,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("$AnonymousType$14", $_, {
        $kind: "anonymous",
        ctor: function (type, name, value, min, precision) {
            this.type = type;
            this.name = name;
            this.value = value;
            this.min = min;
            this.precision = precision;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getvalue : function () {
            return this.value;
        },
        getmin : function () {
            return this.min;
        },
        getprecision : function () {
            return this.precision;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$14)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.value, o.value) && Bridge.equals(this.min, o.min) && Bridge.equals(this.precision, o.precision);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7192687542, this.type, this.name, this.value, this.min, this.precision]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                value : this.value,
                min : this.min,
                precision : this.precision
            };
        }
    });

    Bridge.define("WebMrbc.ControlsRepeatExtBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13(Blockly.Msg.CONTROLS_REPEAT_TITLE, [new $_.$AnonymousType$12("input_value", "TIMES", "Number")], null, null, WebMrbc.Loops.HUE, Blockly.Msg.CONTROLS_REPEAT_TOOLTIP, Blockly.Msg.CONTROLS_REPEAT_HELPURL));
            this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        }
    });

    Bridge.define("WebMrbc.ControlsWhileUntilBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"], [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]];
            this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
            this.setColour(WebMrbc.Loops.HUE);
            this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS), "MODE");
            this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("MODE")) {
                    case "WHILE": 
                        return Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE;
                    case "UNTIL": 
                        return Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL;
                }
                return "";
            });
        }
    });

    Bridge.define("WebMrbc.CreateEsvGetBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 電文の作成 %2 プロパティコード %3", [new $_.$AnonymousType$16("field_dropdown", "TYPE", [["読み出し要求", "esv_get"], ["通知要求", "esv_inf_req"]]), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$10("input_value", "EPC", "Number", "RIGHT")], "EData", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("$AnonymousType$15", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, output, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.output = output;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$15)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7209464758, this.message0, this.args0, this.output, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                output : this.output,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("$AnonymousType$16", $_, {
        $kind: "anonymous",
        ctor: function (type, name, options) {
            this.type = type;
            this.name = name;
            this.options = options;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getoptions : function () {
            return this.options;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$16)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.options, o.options);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7226241974, this.type, this.name, this.options]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                options : this.options
            };
        }
    });

    Bridge.define("$AnonymousType$17", $_, {
        $kind: "anonymous",
        ctor: function (type) {
            this.type = type;
        },
        gettype : function () {
            return this.type;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$17)) {
                return false;
            }
            return Bridge.equals(this.type, o.type);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7243019190, this.type]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type
            };
        }
    });

    Bridge.define("WebMrbc.CreateEsvSetBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 電文の作成 %2 プロパティコード %3 プロパティ値 %4", [new $_.$AnonymousType$16("field_dropdown", "TYPE", [["書き込み要求（応答不要）", "esv_set_i"], ["書き込み要求（応答要）", "esv_set_c"], ["書き込み・読み出し要求", "esv_set_get"], ["通知（応答要）", "esv_infc"]]), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$10("input_value", "EPC", "Number", "RIGHT"), new $_.$AnonymousType$10("input_value", "EDT", "String", "RIGHT")], "EData", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.DacValueBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 4095, 1), "DAC_VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("DAC 0～4095");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.DataCreateJoinContainerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("結合");
            this.appendStatementInput("STACK");
            this.setColour(230);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.DataCreateJoinItemBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("項目");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(230);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.DataJoinBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.itemCount_ = 2;
            this.updateShape_();
            this.setOutput(true, "String");
            this.setMutator(new Blockly.Mutator(["data_create_join_item"]));
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("items", this.itemCount_.toString());
            return container;
        },
        domToMutation: function (xmlElement) {
            this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
            this.updateShape_();
        },
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("data_create_join_container");
            containerBlock.initSvg();
            var connection = containerBlock.getInput("STACK").connection;
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var itemBlock = workspace.newBlock("data_create_join_item");
                itemBlock.initSvg();
                connection.connect(itemBlock.previousConnection);
                connection = itemBlock.nextConnection;
            }
            return containerBlock;
        },
        compose: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            var connections = System.Array.init(0, null);
            while (itemBlock != null) {
                connections.push(itemBlock.valueConnection_);
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var connection = this.getInput(System.String.concat("ADD", i)).connection.targetConnection;
                if (connection != null && System.Array.indexOfT(connections, connection) === -1) {
                    connection.disconnect();
                }
            }
            this.itemCount_ = connections.length;
            this.updateShape_();
            for (var i1 = 0; i1 < this.itemCount_; i1 = (i1 + 1) | 0) {
                Blockly.Mutator.reconnect(connections[i1], this, System.String.concat("ADD", i1));
            }
        },
        saveConnections: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            var i = 0;
            while (itemBlock != null) {
                var input = this.getInput(System.String.concat("ADD", i));
                itemBlock.valueConnection_ = (input != null) ? input.connection.targetConnection : null;
                i = (i + 1) | 0;
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
        },
        updateShape_: function () {
            if (this.itemCount_ !== 0 && this.getInput("EMPTY") != null) {
                this.removeInput("EMPTY");
            } else if (this.itemCount_ === 0 && this.getInput("EMPTY") == null) {
                this.appendDummyInput("EMPTY").appendField("空のデータを作ります");
            }
            var i;
            for (i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                if (this.getInput(System.String.concat("ADD", i)) == null) {
                    var input = this.appendValueInput(System.String.concat("ADD", i));
                    if (i === 0) {
                        input.appendField("データを作ります");
                    }
                }
            }
            while (this.getInput(System.String.concat("ADD", i)) != null) {
                this.removeInput(System.String.concat("ADD", i));
                i = (i + 1) | 0;
            }
        }
    });

    Bridge.define("WebMrbc.DelayBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ディレイ");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.DigitalReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("デジタルリード").appendField(WebMrbc.GrSakura.pins(), "PIN_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.DigitalWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("デジタルライト").appendField(WebMrbc.GrSakura.pins(), "PIN_NO");
            this.appendDummyInput().appendField("値").appendField(new Blockly.FieldDropdown([["LOW", "LOW"], ["HIGH", "HIGH"]]), "PIN_VALUE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.EcnlPropertyLocalBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        getInputName: function () {
            var match = false;
            var prev, block = this;
            for (; ; ) {
                prev = block;
                block = prev.getParent();
                if (block == null) {
                    break;
                }

                if (Bridge.referenceEquals(block.type, "eproperty_new")) {
                    match = true;
                    break;
                }
            }

            if (!match) {
                return "";
            }

            for (var i = 0; i < block.inputList.length; i = (i + 1) | 0) {
                var input = block.inputList[i];
                if (input.connection == null) {
                    continue;
                }

                var childBlock = input.connection.targetBlock();
                if (Bridge.referenceEquals(childBlock.id, prev.id)) {
                    return input.name;
                }
            }

            return "";
        }
    });

    Bridge.define("WebMrbc.EcnlNodeIDBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);

        },
        init: function () {
            this.appendDummyInput().appendField("ノードID").appendField(new Blockly.FieldDropdown([["アドレスID登録なし", "ENOD_NOT_MATCH_ID"], ["マルチキャストアドレスID", "ENOD_MULTICAST_ID"], ["自ノードアドレスID", "ENOD_LOCAL_ID"], ["APIアドレスID", "ENOD_API_ID"], ["他ノードID", "ENOD_REMOTE_ID"]]), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.EcnlPropertyAttributeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);

        },
        init: function () {
            this.appendDummyInput().appendField("プロパティ属性").appendField(new Blockly.FieldDropdown([["未設定", "EPC_NONE"], ["設定可", "EPC_RULE_SET"], ["取得可", "EPC_RULE_GET"], ["通知有り", "EPC_RULE_ANNO"], ["状態変化時通知", "EPC_ANNOUNCE"], ["可変長データ", "EPC_VARIABLE"]]), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.EcnlServiceCodeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);

        },
        init: function () {
            this.appendDummyInput().appendField("サービスコード").appendField(new Blockly.FieldDropdown([["プロパティ値書き込み要求（応答不要）", "ESV_SET_I"], ["プロパティ値書き込み要求（応答要）", "ESV_SET_C"], ["プロパティ値読み出し要求", "ESV_GET"], ["プロパティ値通知要求", "ESV_INF_REQ"], ["プロパティ値書き込み・読み出し要求", "ESV_SET_GET"], ["プロパティ値書き込み応答", "ESV_SET_RES"], ["プロパティ値読み出し応答", "ESV_GET_RES"], ["プロパティ値通知", "ESV_INF"], ["プロパティ値通知（応答要）", "ESV_INFC"], ["プロパティ値通知応答", "ESV_INFC_RES"], ["プロパティ値書き込み・読み出し応答", "ESV_SET_GET_RES"], ["プロパティ値書き込み要求不可応答", "ESV_SET_I_SNA"], ["プロパティ値書き込み要求不可応答", "ESV_SET_C_SNA"], ["プロパティ値読み出し不可応答", "ESV_GET_SNA"], ["プロパティ値通知不可応答", "ESV_INF_SNA"], ["プロパティ値書き込み・読み出し不可応答", "ESV_SET_GET_SNA"]]), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.IClassWorkspace", {
        inherits: [WebMrbc.IModel],
        $kind: "interface"
    });

    Bridge.define("WebMrbc.EPropertyBlock", {
        inherits: [WebMrbc.Block],
        propertyInfo: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput("PROPERTY").appendField(new Blockly.FieldTextInput("onoff_prop"), "IDENTIFIER").appendField("動作状態", "DESCRIPTION").appendField("EPC:").appendField("80", "PROPERTY_CODE").appendField("Size:").appendField("1", "PROPERTY_SIZE").appendField("byte");
            this.appendStatementInput("SET").setCheck("EPropertySetHandler").appendField("設定(prop, src)");
            this.appendValueInput("SET_RET").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("設定に使用したバイト数");
            this.appendStatementInput("GET").setCheck("EPropertyGetHandler").appendField("取得(prop, size)");
            this.appendValueInput("GET_RET").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("返すデータ");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");

            this.getField("PROPERTY_CODE").EDITABLE = true;
        },
        initPropertyInfo: function (workspace) {
            var $t;
            var c = workspace.eobject;
            var epc = parseInt(this.getFieldValue("PROPERTY_CODE"), 16);
            $t = Bridge.getEnumerator(c.properties);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item.propertyCode !== epc) {
                    continue;
                }

                this.setPropertyInfo(item);
                break;
            }
        },
        setPropertyInfo: function (pi) {
            this.propertyInfo = pi;

            this.setFieldValue(WebMrbc.CodeGenerator.getPropertyIdentifier(pi), "IDENTIFIER");
            this.setFieldValue(pi.description, "DESCRIPTION");
            this.setFieldValue(System.Byte.format(pi.propertyCode, "X2"), "PROPERTY_CODE");
            this.setFieldValue(pi.size.toString(), "PROPERTY_SIZE");
        },
        onCreate: function (workspace, cre) {
            if (this.propertyInfo == null) {
                this.initPropertyInfo(workspace);
            }
        },
        onChange: function (workspace, chg) {
            if (!Bridge.referenceEquals(chg.element, "field")) {
                return;
            }

            switch (chg.name) {
                case "IDENTIFIER": 
                    this.propertyInfo.identifier = this.getFieldValue("IDENTIFIER");
                    break;
                case "PROPERTY_CODE": 
                    this.initPropertyInfo(workspace);
                    break;
            }
        },
        onDelete: function (workspace, del) {
        },
        onMove: function (workspace, mov) {
        }
    });

    Bridge.define("WebMrbc.EsvAddEdtBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 に %2 %3 として %4 %5 を追加", [new $_.$AnonymousType$18("field_variable", "ESV", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "EPC", "Number"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "EDT", "String")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("$AnonymousType$18", $_, {
        $kind: "anonymous",
        ctor: function (type, name, variable) {
            this.type = type;
            this.name = name;
            this.variable = variable;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getvariable : function () {
            return this.variable;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$18)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.variable, o.variable);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7259796406, this.type, this.name, this.variable]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                variable : this.variable
            };
        }
    });

    Bridge.define("WebMrbc.EsvAddEpcBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 に %2 %3 を追加", [new $_.$AnonymousType$18("field_variable", "ESV", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "EPC", "Number")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.EsvGetEsvBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 のサービスコード", [new $_.$AnonymousType$18("field_variable", "ESV", "item")], "Number", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.EsvIterateBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 にある要素で繰り返し %2 %3", [new $_.$AnonymousType$18("field_variable", "ESV", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$19("input_statement", "DO")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("$AnonymousType$19", $_, {
        $kind: "anonymous",
        ctor: function (type, name) {
            this.type = type;
            this.name = name;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$19)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7276573622, this.type, this.name]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name
            };
        }
    });

    Bridge.define("WebMrbc.EsvIteratorBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1", [new $_.$AnonymousType$16("field_dropdown", "ITEM", [["プロパティコード", "epc"], ["プロパティ値", "edt"], ["要素の番号", "state"]])], "Number", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.HexadecimalBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var input = new Blockly.FieldTextInput("00000000");
            input.setValidator(Bridge.fn.bind(this, this.validator));

            this.appendDummyInput().appendField("HEX").appendField(input, "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");

        },
        validator: function (text) {
            text = text.replace(new RegExp("[^0-9a-fA-F]+", "g"), "");
            return text;
        }
    });

    Bridge.define("WebMrbc.I2cAvailableBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの受信バッファ内にあるデータ数を調べる").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cBeginBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信開始準備").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cEndBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信シーケンスを発行する").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendDummyInput().appendField("ストップコンディション発生").appendField(new Blockly.FieldCheckbox("TRUE"), "STOP");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cFrequencyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの周波数を変更する").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendValueInput("FREQUENCY").setCheck("Number").appendField("周波数");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cLreadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへ受信シーケンスを発行しデータを読み出す").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cLwriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの送信バッファの末尾に数値を追加する").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendValueInput("DATA").setCheck("Number").appendField("データ");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cNewBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cの初期化").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cからの読み込み").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendValueInput("ADDRESS_L").setCheck("Number").appendField("下位アドレス");
            this.appendValueInput("ADDRESS_H").setCheck("Number").appendField("上位アドレス");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cRequestBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへ受信シーケンスを発行する").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("COUNT").setCheck("Number").appendField("データ数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.I2cWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("I2Cへの書き込み").appendField(WebMrbc.GrSakura.i2CPorts(), "I2C_PORT_NO");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("アドレス");
            this.appendValueInput("DATA").setCheck("Number").appendField("データ");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.InitDacBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("アナログDACピン初期化");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.InRangeValue", {
        inherits: [WebMrbc.Value],
        _Range: null,
        _Value: System.Int64(0),
        ctor: function (range, value) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._Range = range;
            this._Value = value;
        },
        getRange: function () {
            return this._Range;
        },
        getValue: function () {
            return this._Value;
        },
        getDisp: function () {
            return this._Range.getDisp$1(this._Value);
        },
        getInitialValue: function () {
            return this._Value.toString(16).toUpperCase();
        }
    });

    Bridge.define("WebMrbc.JsonNodeInfo", {
        inherits: [WebMrbc.JsonObjectInfo],
        objects: null,
        ctor: function (type, identifier, attribute) {
            this.$initialize();
            WebMrbc.JsonObjectInfo.ctor.call(this, type, identifier);
            this.attribute = attribute;
            this.objects = System.Array.init(0, null);
        }
    });

    Bridge.define("WebMrbc.JsonPropertyInfo", {
        inherits: [WebMrbc.JsonFieldInfo],
        classInfo: null,
        propertyCode: 0,
        access: null,
        required: null,
        ctor: function () {
            this.$initialize();
            WebMrbc.JsonFieldInfo.ctor.call(this);
        },
        $ctor1: function (p) {
            this.$initialize();
            WebMrbc.JsonFieldInfo.ctor.call(this);
            this.classInfo = p.classInfo;
            this.propertyCode = p.propertyCode;
            this.access = p.access;
            this.required = p.required;
            this.description = p.description;
            this.valueDescription = p.valueDescription;
            this.unitDescription = p.unitDescription;
            this.initialValue = p.initialValue;
            this.type = p.type;
            this.identifier = p.identifier;
            this.primitive = p.primitive;
            this.isArray = p.isArray;
            this.arrayCount = p.arrayCount;
            this.size = p.size;
            this.fields = p.fields;
        }
    });

    Bridge.define("WebMrbc.LedBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("LED");
            this.appendValueInput("SW").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ListsCreateEmptyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$7(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE, "Array", WebMrbc.Lists.HUE, Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP, Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL));
        }
    });

    Bridge.define("WebMrbc.ListsCreateWithBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            this.itemCount_ = 3;
            this.updateShape_();
            this.setOutput(true, "Array");
            this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
            this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("items", this.itemCount_.toString());
            return container;
        },
        domToMutation: function (xmlElement) {
            this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
            this.updateShape_();
        },
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("lists_create_with_container");
            containerBlock.initSvg();
            var connection = containerBlock.getInput("STACK").connection;
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var itemBlock = workspace.newBlock("lists_create_with_item");
                itemBlock.initSvg();
                connection.connect(itemBlock.previousConnection);
                connection = itemBlock.nextConnection;
            }
            return containerBlock;
        },
        compose: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            // Count number of inputs.
            var connections = System.Array.init(0, null);
            while (itemBlock != null) {
                connections.push(itemBlock.valueConnection_);
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
            // Disconnect any children that don"t belong.
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var connection = this.getInput(System.String.concat("ADD", i)).connection.targetConnection;
                if (connection != null && System.Array.indexOfT(connections, connection) === -1) {
                    connection.disconnect();
                }
            }
            this.itemCount_ = connections.length;
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i1 = 0; i1 < this.itemCount_; i1 = (i1 + 1) | 0) {
                Blockly.Mutator.reconnect(connections[i1], this, System.String.concat("ADD", i1));
            }
        },
        saveConnections: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            var i = 0;
            while (itemBlock != null) {
                var input = this.getInput(System.String.concat("ADD", i));
                itemBlock.valueConnection_ = (input != null) ? input.connection.targetConnection : null;
                i = (i + 1) | 0;
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
        },
        updateShape_: function () {
            if (this.itemCount_ !== 0 && this.getInput("EMPTY") != null) {
                this.removeInput("EMPTY");
            } else if (this.itemCount_ === 0 && this.getInput("EMPTY") == null) {
                this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
            }
            // Add new inputs.
            var i;
            for (i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                if (this.getInput(System.String.concat("ADD", i)) == null) {
                    var input = this.appendValueInput(System.String.concat("ADD", i));
                    if (i === 0) {
                        input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
                    }
                }
            }
            // Remove deleted inputs.
            while (this.getInput(System.String.concat("ADD", i)) != null) {
                this.removeInput(System.String.concat("ADD", i));
                i = (i + 1) | 0;
            }
        }
    });

    Bridge.define("WebMrbc.ListsCreateWithContainerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Lists.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
            this.appendStatementInput("STACK");
            this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ListsCreateWithItemBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Lists.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ListsGetIndexBlock", {
        inherits: [WebMrbc.Block],
        WHERE_OPTIONS: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var MODE = [[Blockly.Msg.LISTS_GET_INDEX_GET, "GET"], [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]];
            this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
            this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            var modeMenu = new Blockly.FieldDropdown(MODE, Bridge.fn.bind(this, $_.WebMrbc.ListsGetIndexBlock.f1));
            this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);
            this.appendDummyInput().appendField(modeMenu, "MODE").appendField("", "SPACE");
            this.appendDummyInput("AT");
            if (!System.String.isNullOrEmpty(Blockly.Msg.LISTS_GET_INDEX_TAIL)) {
                this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);
            }
            this.setInputsInline(true);
            this.setOutput(true);
            this.updateAt_(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                var mode = thisBlock.getFieldValue("MODE");
                var where = thisBlock.getFieldValue("WHERE");
                var tooltip = "";
                switch (System.String.concat(System.String.concat(mode, " "), where)) {
                    case "GET FROM_START": 
                    case "GET FROM_END": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                        break;
                    case "GET FIRST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                        break;
                    case "GET LAST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                        break;
                    case "GET RANDOM": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                        break;
                    case "GET_REMOVE FROM_START": 
                    case "GET_REMOVE FROM_END": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                        break;
                    case "GET_REMOVE FIRST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                        break;
                    case "GET_REMOVE LAST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                        break;
                    case "GET_REMOVE RANDOM": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                        break;
                    case "REMOVE FROM_START": 
                    case "REMOVE FROM_END": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                        break;
                    case "REMOVE FIRST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                        break;
                    case "REMOVE LAST": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                        break;
                    case "REMOVE RANDOM": 
                        tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
                        break;
                }
                if (Bridge.referenceEquals(where, "FROM_START") || Bridge.referenceEquals(where, "FROM_END")) {
                    var msg = (Bridge.referenceEquals(where, "FROM_START")) ? Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP : Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP;
                    tooltip = System.String.concat(tooltip, (System.String.concat("  ", System.String.replaceAll(msg, "%1", thisBlock.workspace.options.oneBasedIndex ? "#1" : "#0"))));
                }
                return tooltip;
            });
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var isStatement = this.outputConnection == null;
            container.setAttribute("statement", System.Boolean.toString(isStatement));
            var isAt = this.getInput("AT").type === Blockly.INPUT_VALUE;
            container.setAttribute("at", System.Boolean.toString(isAt));
            return container;
        },
        domToMutation: function (xmlElement) {
            // Note: Until January 2013 this block did not have mutations,
            // so "statement" defaults to false and "at" defaults to true.
            var isStatement = (Bridge.referenceEquals(xmlElement.getAttribute("statement"), "true"));
            this.updateStatement_(isStatement);
            var isAt = (!Bridge.referenceEquals(xmlElement.getAttribute("at"), "false"));
            this.updateAt_(isAt);
        },
        updateStatement_: function (newStatement) {
            var oldStatement = this.outputConnection == null;
            if (newStatement !== oldStatement) {
                this.unplug(true);
                if (newStatement) {
                    this.setOutput(false);
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                } else {
                    this.setPreviousStatement(false);
                    this.setNextStatement(false);
                    this.setOutput(true);
                }
            }
        },
        updateAt_: function (isAt) {
            // Destroy old "AT" and "ORDINAL" inputs.
            this.removeInput("AT");
            this.removeInput("ORDINAL", true);
            // Create either a value "AT" input or a dummy input.
            if (isAt) {
                this.appendValueInput("AT").setCheck("Number");
                if (!System.String.isNullOrEmpty(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) {
                    this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
                }
            } else {
                this.appendDummyInput("AT");
            }
            var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, Bridge.fn.bind(this, function (value) {
                var newAt = (Bridge.referenceEquals(value, "FROM_START")) || (Bridge.referenceEquals(value, "FROM_END"));
                // The "isAt" variable is available due to this function being a closure.
                if (newAt !== isAt) {
                    var block = this.sourceBlock_;
                    Bridge.cast(block, WebMrbc.ListsGetIndexBlock).updateAt_(newAt);
                    // This menu has been destroyed and replaced.  Update the replacement.
                    block.setFieldValue(value, "WHERE");
                    return null;
                }
                return undefined;
            }));
            this.getInput("AT").appendField(menu, "WHERE");
            if (!System.String.isNullOrEmpty(Blockly.Msg.LISTS_GET_INDEX_TAIL)) {
                this.moveInputBefore("TAIL", null);
            }
        }
    });

    Bridge.ns("WebMrbc.ListsGetIndexBlock", $_);

    Bridge.apply($_.WebMrbc.ListsGetIndexBlock, {
        f1: function (value) {
            var isStatement = (Bridge.referenceEquals(value, "REMOVE"));
            Bridge.cast(this.sourceBlock_, WebMrbc.ListsGetIndexBlock).updateStatement_(isStatement);
            return undefined;
        }
    });

    Bridge.define("WebMrbc.ListsGetSublistBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.WHERE_OPTIONS_1 = [[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]];
            this.WHERE_OPTIONS_2 = [[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, "LAST"]];
            this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
            this.appendDummyInput("AT1");
            this.appendDummyInput("AT2");
            if (!System.String.isNullOrEmpty(Blockly.Msg.LISTS_GET_SUBLIST_TAIL)) {
                this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);
            }
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.updateAt_(1, true);
            this.updateAt_(2, true);
            this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP);
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var isAt1 = this.getInput("AT1").type === Blockly.INPUT_VALUE;
            container.setAttribute("at1", System.Boolean.toString(isAt1));
            var isAt2 = this.getInput("AT2").type === Blockly.INPUT_VALUE;
            container.setAttribute("at2", System.Boolean.toString(isAt2));
            return container;
        },
        domToMutation: function (xmlElement) {
            var isAt1 = (Bridge.referenceEquals(xmlElement.getAttribute("at1"), "true"));
            var isAt2 = (Bridge.referenceEquals(xmlElement.getAttribute("at2"), "true"));
            this.updateAt_(1, isAt1);
            this.updateAt_(2, isAt2);
        },
        updateAt_: function (n, isAt) {
            // Create or delete an input for the numeric index.
            // Destroy old "AT" and "ORDINAL" inputs.
            this.removeInput(System.String.concat("AT", n));
            this.removeInput(System.String.concat("ORDINAL", n), true);
            // Create either a value "AT" input or a dummy input.
            if (isAt) {
                this.appendValueInput(System.String.concat("AT", n)).setCheck("Number");
                if (!System.String.isNullOrEmpty(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) {
                    this.appendDummyInput(System.String.concat("ORDINAL", n)).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
                }
            } else {
                this.appendDummyInput(System.String.concat("AT", n));
            }
            var menu = new Blockly.FieldDropdown(this[System.String.concat("WHERE_OPTIONS_", n)], Bridge.fn.bind(this, function (value) {
                var newAt = (Bridge.referenceEquals(value, "FROM_START")) || (Bridge.referenceEquals(value, "FROM_END"));
                // The "isAt" variable is available due to this function being a
                // closure.
                if (newAt !== isAt) {
                    var block = this.sourceBlock_;
                    Bridge.cast(block, WebMrbc.ListsGetSublistBlock).updateAt_(n, newAt);
                    // This menu has been destroyed and replaced.
                    // Update the replacement.
                    block.setFieldValue(value, System.String.concat("WHERE", n));
                    return null;
                }
                return undefined;
            }));
            this.getInput(System.String.concat("AT", n)).appendField(menu, System.String.concat("WHERE", n));
            if (n === 1) {
                this.moveInputBefore("AT1", "AT2");
                if (this.getInput("ORDINAL1") != null) {
                    this.moveInputBefore("ORDINAL1", "AT2");
                }
            }
            if (!System.String.isNullOrEmpty(Blockly.Msg.LISTS_GET_SUBLIST_TAIL)) {
                this.moveInputBefore("TAIL", null);
            }
        }
    });

    Bridge.define("WebMrbc.ListsIndexOfBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"], [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"]];
            this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            this.setOutput(true, "Number");
            this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);
            this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(OPERATORS), "END");
            this.setInputsInline(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(Bridge.fn.bind(this, $_.WebMrbc.ListsIndexOfBlock.f1));
        }
    });

    Bridge.ns("WebMrbc.ListsIndexOfBlock", $_);

    Bridge.apply($_.WebMrbc.ListsIndexOfBlock, {
        f1: function () {
            return System.String.replaceAll(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP, "%1", this.workspace.options.oneBasedIndex ? "0" : "-1");
        }
    });

    Bridge.define("WebMrbc.ListsIsEmptyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.LISTS_ISEMPTY_TITLE, [new $_.$AnonymousType$20("input_value", "VALUE", ["String", "Array"])], "Boolean", WebMrbc.Lists.HUE, Blockly.Msg.LISTS_ISEMPTY_TOOLTIP, Blockly.Msg.LISTS_ISEMPTY_HELPURL));
        }
    });

    Bridge.define("$AnonymousType$20", $_, {
        $kind: "anonymous",
        ctor: function (type, name, check) {
            this.type = type;
            this.name = name;
            this.check = check;
        },
        gettype : function () {
            return this.type;
        },
        getname : function () {
            return this.name;
        },
        getcheck : function () {
            return this.check;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$20)) {
                return false;
            }
            return Bridge.equals(this.type, o.type) && Bridge.equals(this.name, o.name) && Bridge.equals(this.check, o.check);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7125644214, this.type, this.name, this.check]);
            return h;
        },
        toJSON: function () {
            return {
                type : this.type,
                name : this.name,
                check : this.check
            };
        }
    });

    Bridge.define("WebMrbc.ListsLengthBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.LISTS_LENGTH_TITLE, [new $_.$AnonymousType$20("input_value", "VALUE", ["String", "Array"])], "Number", WebMrbc.Lists.HUE, Blockly.Msg.LISTS_LENGTH_TOOLTIP, Blockly.Msg.LISTS_LENGTH_HELPURL));
        }
    });

    Bridge.define("WebMrbc.ListsRepeatBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.LISTS_REPEAT_TITLE, [new $_.$AnonymousType$19("input_value", "ITEM"), new $_.$AnonymousType$12("input_value", "NUM", "Number")], "Array", WebMrbc.Lists.HUE, Blockly.Msg.LISTS_REPEAT_TOOLTIP, Blockly.Msg.LISTS_REPEAT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.ListsSetIndexBlock", {
        inherits: [WebMrbc.Block],
        WHERE_OPTIONS: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var MODE = [[Blockly.Msg.LISTS_SET_INDEX_SET, "SET"], [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"]];
            this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]];
            this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
            this.appendDummyInput().appendField(new Blockly.FieldDropdown(MODE), "MODE").appendField("", "SPACE");
            this.appendDummyInput("AT");
            this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
            this.setInputsInline(true);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
            this.updateAt_(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                var mode = thisBlock.getFieldValue("MODE");
                var where = thisBlock.getFieldValue("WHERE");
                var tooltip = "";
                switch (System.String.concat(System.String.concat(mode, " "), where)) {
                    case "SET FROM_START": 
                    case "SET FROM_END": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                        break;
                    case "SET FIRST": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                        break;
                    case "SET LAST": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                        break;
                    case "SET RANDOM": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                        break;
                    case "INSERT FROM_START": 
                    case "INSERT FROM_END": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                        break;
                    case "INSERT FIRST": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                        break;
                    case "INSERT LAST": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                        break;
                    case "INSERT RANDOM": 
                        tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
                        break;
                }
                if (Bridge.referenceEquals(where, "FROM_START") || Bridge.referenceEquals(where, "FROM_END")) {
                    tooltip = System.String.concat(tooltip, (System.String.concat("  ", System.String.replaceAll(Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP, "%1", thisBlock.workspace.options.oneBasedIndex ? "#1" : "#0"))));
                }
                return tooltip;
            });
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var isAt = this.getInput("AT").type === Blockly.INPUT_VALUE;
            container.setAttribute("at", System.Boolean.toString(isAt));
            return container;
        },
        domToMutation: function (xmlElement) {
            // Note: Until January 2013 this block did not have mutations,
            // so "at" defaults to true.
            var isAt = (!Bridge.referenceEquals(xmlElement.getAttribute("at"), "false"));
            this.updateAt_(isAt);
        },
        updateAt_: function (isAt) {
            // Destroy old "AT" and "ORDINAL" input.
            this.removeInput("AT");
            this.removeInput("ORDINAL", true);
            // Create either a value "AT" input or a dummy input.
            if (isAt) {
                this.appendValueInput("AT").setCheck("Number");
                if (!System.String.isNullOrEmpty(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) {
                    this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
                }
            } else {
                this.appendDummyInput("AT");
            }
            var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, Bridge.fn.bind(this, function (value) {
                var newAt = (Bridge.referenceEquals(value, "FROM_START")) || (Bridge.referenceEquals(value, "FROM_END"));
                // The "isAt" variable is available due to this function being a closure.
                if (newAt !== isAt) {
                    var block = this.sourceBlock_;
                    Bridge.cast(block, WebMrbc.ListsSetIndexBlock).updateAt_(newAt);
                    // This menu has been destroyed and replaced.  Update the replacement.
                    block.setFieldValue(value, "WHERE");
                    return null;
                }
                return undefined;
            }));
            this.moveInputBefore("AT", "TO");
            if (this.getInput("ORDINAL") != null) {
                this.moveInputBefore("ORDINAL", "TO");
            }

            this.getInput("AT").appendField(menu, "WHERE");
        }
    });

    Bridge.define("WebMrbc.ListsSortBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.LISTS_SORT_TITLE, [new $_.$AnonymousType$16("field_dropdown", "TYPE", [[Blockly.Msg.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"], [Blockly.Msg.LISTS_SORT_TYPE_TEXT, "TEXT"], [Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]]), new $_.$AnonymousType$16("field_dropdown", "DIRECTION", [[Blockly.Msg.LISTS_SORT_ORDER_ASCENDING, "1"], [Blockly.Msg.LISTS_SORT_ORDER_DESCENDING, "-1"]]), new $_.$AnonymousType$12("input_value", "LIST", "Array")], "Array", WebMrbc.Lists.HUE, Blockly.Msg.LISTS_SORT_TOOLTIP, Blockly.Msg.LISTS_SORT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.ListsSplitBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            // Assign "this" to a variable for use in the closures below.
            var thisBlock = this;
            var dropdown = new Blockly.FieldDropdown([[Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"], [Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]], function (newMode) {
                thisBlock.updateType_(newMode);
                return undefined;
            });
            this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);
            this.setColour(WebMrbc.Lists.HUE);
            this.appendValueInput("INPUT").setCheck("String").appendField(dropdown, "MODE");
            this.appendValueInput("DELIM").setCheck("String").appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setTooltip(function () {
                var mode = thisBlock.getFieldValue("MODE");
                if (Bridge.referenceEquals(mode, "SPLIT")) {
                    return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
                } else if (Bridge.referenceEquals(mode, "JOIN")) {
                    return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;
                }
                throw new System.Exception(System.String.concat("Unknown mode: ", mode));
            });
        },
        updateType_: function (newMode) {
            if (Bridge.referenceEquals(newMode, "SPLIT")) {
                this.outputConnection.setCheck("Array");
                this.getInput("INPUT").setCheck("String");
            } else {
                this.outputConnection.setCheck("String");
                this.getInput("INPUT").setCheck("Array");
            }
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("mode", this.getFieldValue("MODE"));
            return container;
        },
        domToMutation: function (xmlElement) {
            this.updateType_(xmlElement.getAttribute("mode"));
        }
    });

    Bridge.define("WebMrbc.LogicBooleanBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1", [new $_.$AnonymousType$16("field_dropdown", "BOOL", [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"], [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]])], "Boolean", WebMrbc.Logic.HUE, Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP, Blockly.Msg.LOGIC_BOOLEAN_HELPURL));
        }
    });

    Bridge.define("WebMrbc.LogicCompareBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var rtlOperators = [["=", "EQ"], ["≠", "NEQ"], ["‏<‏", "LT"], ["‏≤‏", "LTE"], ["‏>‏", "GT"], ["‏≥‏", "GTE"]];
            var ltrOperators = [["=", "EQ"], ["≠", "NEQ"], ["<", "LT"], ["≤", "LTE"], [">", "GT"], ["≥", "GTE"]];
            var OPERATORS = this.RTL ? rtlOperators : ltrOperators;
            this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
            this.setColour(WebMrbc.Logic.HUE);
            this.setOutput(true, "Boolean");
            this.appendValueInput("A");
            this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
            this.setInputsInline(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "EQ": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ;
                    case "NEQ": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ;
                    case "LT": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT;
                    case "LTE": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE;
                    case "GT": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT;
                    case "GTE": 
                        return Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE;
                }
                return "";
            });
            this.prevBlocks_ = [null, null];
        },
        onchange: function (e) {
            var blockA = this.getInputTargetBlock("A");
            var blockB = this.getInputTargetBlock("B");
            // Disconnect blocks that existed prior to this change if they don"t match.
            if (blockA != null && blockB != null && !blockA.outputConnection.checkType_(blockB.outputConnection)) {
                // Mismatch between two inputs.  Disconnect previous and bump it away.
                // Ensure that any disconnections are grouped with the causing event.
                Blockly.Events.setGroup(e.group);
                for (var i = 0; i < this.prevBlocks_.length; i = (i + 1) | 0) {
                    var block = this.prevBlocks_[i];
                    if (Bridge.referenceEquals(block, blockA) || Bridge.referenceEquals(block, blockB)) {
                        block.unplug();
                        block.bumpNeighbours_();
                    }
                }
                Blockly.Events.setGroup(System.Boolean.toString((false)));
            }
            this.prevBlocks_[0] = blockA;
            this.prevBlocks_[1] = blockB;
        }
    });

    Bridge.define("WebMrbc.LogicNegateBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.LOGIC_NEGATE_TITLE, [new $_.$AnonymousType$12("input_value", "BOOL", "Boolean")], "Boolean", WebMrbc.Logic.HUE, Blockly.Msg.LOGIC_NEGATE_TOOLTIP, Blockly.Msg.LOGIC_NEGATE_HELPURL));
        }
    });

    Bridge.define("WebMrbc.LogicNullBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$21(Blockly.Msg.LOGIC_NULL, null, WebMrbc.Logic.HUE, Blockly.Msg.LOGIC_NULL_TOOLTIP, Blockly.Msg.LOGIC_NULL_HELPURL));
        }
    });

    Bridge.define("$AnonymousType$21", $_, {
        $kind: "anonymous",
        ctor: function (message0, output, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.output = output;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$21)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7142421430, this.message0, this.output, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                output : this.output,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.LogicOperationBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.LOGIC_OPERATION_AND, "AND"], [Blockly.Msg.LOGIC_OPERATION_OR, "OR"]];
            this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
            this.setColour(WebMrbc.Logic.HUE);
            this.setOutput(true, "Boolean");
            this.appendValueInput("A").setCheck("Boolean");
            this.appendValueInput("B").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
            this.setInputsInline(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "AND": 
                        return Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND;
                    case "OR": 
                        return Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR;
                }
                return "";
            });
        }
    });

    Bridge.define("WebMrbc.LogicTernaryBlock", {
        inherits: [WebMrbc.Block],
        prevParentConnection_: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
            this.setColour(WebMrbc.Logic.HUE);
            this.appendValueInput("IF").setCheck("Boolean").appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION);
            this.appendValueInput("THEN").appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE);
            this.appendValueInput("ELSE").appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE);
            this.setOutput(true);
            this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
            this.prevParentConnection_ = null;
        },
        onchange: function (e) {
            var blockA = this.getInputTargetBlock("THEN");
            var blockB = this.getInputTargetBlock("ELSE");
            var parentConnection = this.outputConnection.targetConnection;
            // Disconnect blocks that existed prior to this change if they don"t match.
            if ((blockA != null || blockB != null) && parentConnection != null) {
                for (var i = 0; i < 2; i = (i + 1) | 0) {
                    var block = (i === 1) ? blockA : blockB;
                    if (block != null && !block.outputConnection.checkType_(parentConnection)) {
                        // Ensure that any disconnections are grouped with the causing event.
                        Blockly.Events.setGroup(e.group);
                        if (Bridge.referenceEquals(parentConnection, this.prevParentConnection_)) {
                            this.unplug();
                            parentConnection.getSourceBlock().bumpNeighbours_();
                        } else {
                            block.unplug();
                            block.bumpNeighbours_();
                        }
                        Blockly.Events.setGroup(System.Boolean.toString((false)));
                    }
                }
            }
            this.prevParentConnection_ = parentConnection;
        }
    });

    Bridge.define("WebMrbc.MathArithmeticBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$22("%1 %2 %3", [new $_.$AnonymousType$12("input_value", "A", "Number"), new $_.$AnonymousType$16("field_dropdown", "OP", [[Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"], [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"], [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"], [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"], [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]]), new $_.$AnonymousType$12("input_value", "B", "Number")], true, "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_ARITHMETIC_HELPURL));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "ADD": 
                        return Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD;
                    case "MINUS": 
                        return Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS;
                    case "MULTIPLY": 
                        return Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY;
                    case "DIVIDE": 
                        return Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE;
                    case "POWER": 
                        return Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER;
                }
                ;
                return "";
            });
        }
    });

    Bridge.define("$AnonymousType$22", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, inputsInline, output, colour, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.inputsInline = inputsInline;
            this.output = output;
            this.colour = colour;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getinputsInline : function () {
            return this.inputsInline;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$22)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.inputsInline, o.inputsInline) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7159198646, this.message0, this.args0, this.inputsInline, this.output, this.colour, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                inputsInline : this.inputsInline,
                output : this.output,
                colour : this.colour,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.MathChangeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$11(Blockly.Msg.MATH_CHANGE_TITLE, [new $_.$AnonymousType$18("field_variable", "VAR", Blockly.Msg.MATH_CHANGE_TITLE_ITEM), new $_.$AnonymousType$12("input_value", "DELTA", "Number")], null, null, WebMrbc.Variables.HUE, Blockly.Msg.MATH_CHANGE_HELPURL));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                return System.String.replaceAll(Blockly.Msg.MATH_CHANGE_TOOLTIP, "%1", thisBlock.getFieldValue("VAR"));
            });
        }
    });

    Bridge.define("WebMrbc.MathConstantBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1", [new $_.$AnonymousType$16("field_dropdown", "CONSTANT", [["π", "PI"], ["e", "E"], ["φ", "GOLDEN_RATIO"], ["sqrt(2)", "SQRT2"], ["sqrt(½)", "SQRT1_2"], ["∞", "INFINITY"]])], "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_CONSTANT_TOOLTIP, Blockly.Msg.MATH_CONSTANT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.MathConstrainBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$23(Blockly.Msg.MATH_CONSTRAIN_TITLE, [new $_.$AnonymousType$12("input_value", "VALUE", "Number"), new $_.$AnonymousType$12("input_value", "LOW", "Number"), new $_.$AnonymousType$12("input_value", "HIGH", "Number")], true, "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_CONSTRAIN_TOOLTIP, Blockly.Msg.MATH_CONSTRAIN_HELPURL));
        }
    });

    Bridge.define("$AnonymousType$23", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, inputsInline, output, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.inputsInline = inputsInline;
            this.output = output;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getinputsInline : function () {
            return this.inputsInline;
        },
        getoutput : function () {
            return this.output;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$23)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.inputsInline, o.inputsInline) && Bridge.equals(this.output, o.output) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7175975862, this.message0, this.args0, this.inputsInline, this.output, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                inputsInline : this.inputsInline,
                output : this.output,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.MathModuloBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$23(Blockly.Msg.MATH_MODULO_TITLE, [new $_.$AnonymousType$12("input_value", "DIVIDEND", "Number"), new $_.$AnonymousType$12("input_value", "DIVISOR", "Number")], true, "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_MODULO_TOOLTIP, Blockly.Msg.MATH_MODULO_HELPURL));
        }
    });

    Bridge.define("WebMrbc.MathNumberBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
            this.setColour(WebMrbc.Math.HUE);
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", "-Infinity", "Infinity", 0), "NUM");
            this.setOutput(true, "Number");
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            // Number block is trivial.  Use tooltip of parent block if it exists.
            this.setTooltip(function () {
                var parent = thisBlock.getParent();
                return (parent != null && parent.getInputsInline() && !System.String.isNullOrEmpty(parent.tooltip)) ? parent.tooltip : Blockly.Msg.MATH_NUMBER_TOOLTIP;
            });
        }
    });

    Bridge.define("WebMrbc.MathNumberPropertyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var PROPERTIES = [[Blockly.Msg.MATH_IS_EVEN, "EVEN"], [Blockly.Msg.MATH_IS_ODD, "ODD"], [Blockly.Msg.MATH_IS_PRIME, "PRIME"], [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"], [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"], [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"], [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]];
            this.setColour(WebMrbc.Math.HUE);
            this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");
            var dropdown = new Blockly.FieldDropdown(PROPERTIES, Bridge.fn.bind(this, $_.WebMrbc.MathNumberPropertyBlock.f1));
            this.appendDummyInput().appendField(dropdown, "PROPERTY");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP);
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var divisorInput = (Bridge.referenceEquals(this.getFieldValue("PROPERTY"), "DIVISIBLE_BY"));
            container.setAttribute("divisor_input", System.Boolean.toString(divisorInput));
            return container;
        },
        domToMutation: function (xmlElement) {
            var divisorInput = (Bridge.referenceEquals(xmlElement.getAttribute("divisor_input"), "true"));
            this.updateShape_(divisorInput);
        },
        updateShape_: function (divisorInput) {
            // Add or remove a Value Input.
            var inputExists = this.getInput("DIVISOR");
            if (divisorInput) {
                if (inputExists == null) {
                    this.appendValueInput("DIVISOR").setCheck("Number");
                }
            } else if (inputExists != null) {
                this.removeInput("DIVISOR");
            }
        }
    });

    Bridge.ns("WebMrbc.MathNumberPropertyBlock", $_);

    Bridge.apply($_.WebMrbc.MathNumberPropertyBlock, {
        f1: function (option) {
            var divisorInput = (Bridge.referenceEquals(option, "DIVISIBLE_BY"));
            Bridge.cast(this.sourceBlock_, WebMrbc.MathNumberPropertyBlock).updateShape_(divisorInput);
            return undefined;
        }
    });

    Bridge.define("WebMrbc.MathOnListBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"], [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"], [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"], [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"], [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"], [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"], [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"], [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]];
            // Assign "this" to a variable for use in the closures below.
            var thisBlock = this;
            this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL);
            this.setColour(WebMrbc.Math.HUE);
            this.setOutput(true, "Number");
            var dropdown = new Blockly.FieldDropdown(OPERATORS, function (newOp) {
                thisBlock.updateType_(newOp);
                return undefined;
            });
            this.appendValueInput("LIST").setCheck("Array").appendField(dropdown, "OP");
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "SUM": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM;
                    case "MIN": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN;
                    case "MAX": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX;
                    case "AVERAGE": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE;
                    case "MEDIAN": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN;
                    case "MODE": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE;
                    case "STD_DEV": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV;
                    case "RANDOM": 
                        return Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM;
                }
                return "";
            });
        },
        updateType_: function (newOp) {
            if (Bridge.referenceEquals(newOp, "MODE")) {
                this.outputConnection.setCheck("Array");
            } else {
                this.outputConnection.setCheck("Number");
            }
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("op", this.getFieldValue("OP"));
            return container;
        },
        domToMutation: function (xmlElement) {
            this.updateType_(xmlElement.getAttribute("op"));
        }
    });

    Bridge.define("WebMrbc.MathRandomFloatBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$7(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM, "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP, Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.MathRandomIntBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$23(Blockly.Msg.MATH_RANDOM_INT_TITLE, [new $_.$AnonymousType$12("input_value", "FROM", "Number"), new $_.$AnonymousType$12("input_value", "TO", "Number")], true, "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_RANDOM_INT_TOOLTIP, Blockly.Msg.MATH_RANDOM_INT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.MathRoundBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 %2", [new $_.$AnonymousType$16("field_dropdown", "OP", [[Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"], [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"], [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]]), new $_.$AnonymousType$12("input_value", "NUM", "Number")], "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_ROUND_TOOLTIP, Blockly.Msg.MATH_ROUND_HELPURL));
        }
    });

    Bridge.define("WebMrbc.MathSingleBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$5("%1 %2", [new $_.$AnonymousType$16("field_dropdown", "OP", [[Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"], [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]), new $_.$AnonymousType$12("input_value", "NUM", "Number")], "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_SINGLE_HELPURL));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "ROOT": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT;
                    case "ABS": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS;
                    case "NEG": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG;
                    case "LN": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_LN;
                    case "LOG10": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10;
                    case "EXP": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP;
                    case "POW10": 
                        return Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10;
                }
                return "";
            });
        }
    });

    Bridge.define("WebMrbc.MathTrigBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$5("%1 %2", [new $_.$AnonymousType$16("field_dropdown", "OP", [[Blockly.Msg.MATH_TRIG_SIN, "SIN"], [Blockly.Msg.MATH_TRIG_COS, "COS"], [Blockly.Msg.MATH_TRIG_TAN, "TAN"], [Blockly.Msg.MATH_TRIG_ASIN, "ASIN"], [Blockly.Msg.MATH_TRIG_ACOS, "ACOS"], [Blockly.Msg.MATH_TRIG_ATAN, "ATAN"]]), new $_.$AnonymousType$12("input_value", "NUM", "Number")], "Number", WebMrbc.Math.HUE, Blockly.Msg.MATH_TRIG_HELPURL));
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                switch (thisBlock.getFieldValue("OP")) {
                    case "SIN": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_SIN;
                    case "COS": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_COS;
                    case "TAN": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_TAN;
                    case "ASIN": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN;
                    case "ACOS": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS;
                    case "ATAN": 
                        return Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN;
                }
                return "";
            });
        }
    });

    Bridge.define("WebMrbc.MemFileCloseBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをクローズします").appendField(WebMrbc.GrSakura.memFileHandles(), "MEM_FILE_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileCpBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをコピーします");
            this.appendValueInput("SRC_FILENAME").setCheck("String").appendField("コピー元ファイル名");
            this.appendValueInput("DST_FILENAME").setCheck("String").appendField("コピー先ファイル名");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["上書きしない", "NO_OVERWRITE"], ["上書きする", "OVERWRITE"]]), "EEP_CP_MODE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileOpenBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをオープンします").appendField(WebMrbc.GrSakura.memFileHandles(), "MEM_FILE_NO");
            this.appendValueInput("FILENAME").setCheck("String").appendField("ファイル名(8.3形式)");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["Read", "EEP_READ"], ["Append", "EEP_APPEND"], ["New Create", "EEP_WRITE"]]), "EEP_OPEN_MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルから1バイト読み込みます").appendField(WebMrbc.GrSakura.memFileHandles(), "MEM_FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileRmBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルを削除します");
            this.appendValueInput("FILENAME").setCheck("String").appendField("削除するファイル名");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileSeekBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの読み出し位置を移動する").appendField(WebMrbc.GrSakura.memFileHandles(), "MEM_FILE_NO");
            this.appendValueInput("POSITION").setCheck("Number").appendField("seekするバイト数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MemFileWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルにバイナリデータを書き込みます").appendField(WebMrbc.GrSakura.memFileHandles(), "MEM_FILE_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MicrosBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("起動してからのマイクロ秒数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.MillisBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("起動してからのミリ秒数");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.NotifyInitialEsvBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$24("インスタンスリスト通知の送信", null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("$AnonymousType$24", $_, {
        $kind: "anonymous",
        ctor: function (message0, previousStatement, nextStatement, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.previousStatement = previousStatement;
            this.nextStatement = nextStatement;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getpreviousStatement : function () {
            return this.previousStatement;
        },
        getnextStatement : function () {
            return this.nextStatement;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$24)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.previousStatement, o.previousStatement) && Bridge.equals(this.nextStatement, o.nextStatement) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7192753078, this.message0, this.previousStatement, this.nextStatement, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                previousStatement : this.previousStatement,
                nextStatement : this.nextStatement,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.NoToneBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("トーン出力停止").appendField(WebMrbc.GrSakura.pwmPins(), "PIN_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.Option", {
        inherits: [WebMrbc.Value],
        _Val: System.Int64(0),
        _Disp: null,
        ctor: function (val, disp) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._Val = val;
            this._Disp = disp;
        },
        getVal: function () {
            return this._Val;
        },
        getDisp: function () {
            return this._Disp;
        },
        getInitialValue: function () {
            return this._Val.toString(16).toUpperCase();
        }
    });

    Bridge.define("WebMrbc.PinModeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("PINのモード設定").appendField(WebMrbc.GrSakura.pins(), "PIN_NO");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["INPUTモード", "INPUT"], ["OUTPUTモード", "OUTPUT"]]), "PIN_MODE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ProceduresBlock", {
        inherits: [WebMrbc.Block],
        statics: {
            HUE: 290
        },
        callType_: null,
        paramIds_: null,
        hasStatements_: false,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        setStatements_: function (hasStatements) {
            if (this.hasStatements_ === hasStatements) {
                return;
            }
            if (hasStatements) {
                this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
                if (this.getInput("RETURN") != null) {
                    this.moveInputBefore("STACK", "RETURN");
                }
            } else {
                this.removeInput("STACK", true);
            }
            this.hasStatements_ = hasStatements;
        },
        updateParams_: function () {
            // Check for duplicated arguments.
            var badArg = false;
            var hash = new $_.$AnonymousType$25();
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                if (hash[System.String.concat("arg_", this.arguments_[i].toLowerCase())]) {
                    badArg = true;
                    break;
                }
                hash[System.String.concat("arg_", this.arguments_[i].toLowerCase())] = true;
            }
            if (badArg) {
                this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
            } else {
                this.setWarningText(null);
            }
            // Merge the arguments into a human-readable list.
            var paramString = "";
            if (this.arguments_.length !== 0) {
                paramString = System.String.concat("で。 ", this.arguments_.join(", "));
            }
            // The params field is deterministic based on the mutation,
            // no need to fire a change event.
            Blockly.Events.disable();
            try {
                this.setFieldValue(paramString, "PARAMS");
            }
            finally {
                Blockly.Events.enable();
            }
        },
        mutationToDom: function (opt_paramIds) {
            var container = document.createElement("mutation");
            if (opt_paramIds) {
                container.setAttribute("name", this.getFieldValue("NAME"));
            }
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var parameter = document.createElement("arg");
                parameter.setAttribute("name", this.arguments_[i]);
                if (opt_paramIds && this.paramIds_ != null) {
                    parameter.setAttribute("paramId", this.paramIds_[i]);
                }
                container.appendChild(parameter);
            }

            // Save whether the statement input is visible.
            if (!this.hasStatements_) {
                container.setAttribute("statements", "false");
            }
            return container;
        },
        domToMutation: function (xmlElement) {
            this.arguments_ = System.Array.init(0, null);
            var childNode;
            for (var i = 0; ((childNode = xmlElement.childNodes[i])) != null; i = (i + 1) | 0) {
                if (Bridge.referenceEquals(childNode.nodeName.toLowerCase(), "arg")) {
                    this.arguments_.push(childNode.getAttribute("name"));
                }
            }
            this.updateParams_();
            Blockly.Procedures.mutateCallers(this);

            // Show or hide the statement input.
            this.setStatements_(!Bridge.referenceEquals(xmlElement.getAttribute("statements"), "false"));
        },
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
            containerBlock.initSvg();

            // Check/uncheck the allow statement box.
            if (this.getInput("RETURN") != null) {
                containerBlock.setFieldValue(this.hasStatements_ ? "TRUE" : "FALSE", "STATEMENTS");
            } else {
                containerBlock.getInput("STATEMENT_INPUT").setVisible(false);
            }

            // Parameter list.
            var connection = containerBlock.getInput("STACK").connection;
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var paramBlock = workspace.newBlock("procedures_mutatorarg");
                paramBlock.initSvg();
                paramBlock.setFieldValue(this.arguments_[i], "NAME");
                // Store the old location.
                paramBlock.oldLocation = i;
                connection.connect(paramBlock.previousConnection);
                connection = paramBlock.nextConnection;
            }
            // Initialize procedure"s callers with blank IDs.
            Blockly.Procedures.mutateCallers(this);
            return containerBlock;
        },
        compose: function (containerBlock) {
            // Parameter list.
            this.arguments_ = System.Array.init(0, null);
            this.paramIds_ = System.Array.init(0, null);
            var paramBlock = containerBlock.getInputTargetBlock("STACK");
            while (paramBlock != null) {
                this.arguments_.push(paramBlock.getFieldValue("NAME"));
                this.paramIds_.push(paramBlock.id);
                paramBlock = (paramBlock.nextConnection != null) ? paramBlock.nextConnection.targetBlock() : null;
            }
            this.updateParams_();
            Blockly.Procedures.mutateCallers(this);

            // Show/hide the statement input.
            var hasStatements_ = containerBlock.getFieldValue("STATEMENTS");
            if (hasStatements_ != null) {
                var hasStatements = Bridge.referenceEquals(hasStatements_, "TRUE");
                if (this.hasStatements_ !== hasStatements) {
                    if (hasStatements) {
                        this.setStatements_(true);
                        // Restore the stack, if one was saved.
                        Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK");
                        this.statementConnection_ = null;
                    } else {
                        // Save the stack, then disconnect it.
                        var stackConnection = this.getInput("STACK").connection;
                        this.statementConnection_ = stackConnection.targetConnection;
                        if (this.statementConnection_ != null) {
                            var stackBlock = stackConnection.targetBlock();
                            stackBlock.unplug();
                            stackBlock.bumpNeighbours_();
                        }
                        this.setStatements_(false);
                    }
                }
            }
        },
        getVars: function () {
            return this.arguments_;
        },
        renameVar: function (oldName, newName) {
            var change = false;
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                    this.arguments_[i] = newName;
                    change = true;
                }
            }
            if (change) {
                this.updateParams_();
                // Update the mutator"s variables if the mutator is open.
                if (this.mutator.isVisible()) {
                    var blocks = Bridge.cast(this.mutator.workspace_.getAllBlocks(), Array);
                    var block;
                    for (var i1 = 0; ((block = blocks[i1])) != null; i1 = (i1 + 1) | 0) {
                        if (Bridge.referenceEquals(block.type, "procedures_mutatorarg") && Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) {
                            block.setFieldValue(newName, "NAME");
                        }
                    }
                }
            }
        },
        customContextMenu: function (options) {
            // Add option to create caller.
            var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                enabled: true
            } );
            var name = this.getFieldValue("NAME");
            option.text = System.String.replaceAll(Blockly.Msg.PROCEDURES_CREATE_DO, "%1", name);
            var xmlMutation = goog.dom.createDom("mutation");
            xmlMutation.setAttribute("name", name);
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var xmlArg = goog.dom.createDom("arg");
                xmlArg.setAttribute("name", this.arguments_[i]);
                xmlMutation.appendChild(xmlArg);
            }
            var xmlBlock = goog.dom.createDom("block", null, xmlMutation);
            xmlBlock.setAttribute("type", this.callType_);
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option);

            // Add options to create getters for each parameter.
            if (!this.isCollapsed()) {
                for (var i1 = 0; i1 < this.arguments_.length; i1 = (i1 + 1) | 0) {
                    option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                        enabled: true
                    } );
                    name = this.arguments_[i1];
                    option.text = System.String.replaceAll(Blockly.Msg.VARIABLES_SET_CREATE_GET, "%1", name);
                    var xmlField = goog.dom.createDom("field", null, name);
                    xmlField.setAttribute("name", "VAR");
                    xmlBlock = goog.dom.createDom("block", null, xmlField);
                    xmlBlock.setAttribute("type", "variables_get");
                    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                    options.push(option);
                }
            }
        }
    });

    Bridge.define("$AnonymousType$25", $_, {
        $kind: "anonymous",
        ctor: function () {
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$25)) {
                return false;
            }
            return ;
        },
        getHashCode: function () {
            var h = Bridge.addHash([7209530294]);
            return h;
        },
        toJSON: function () {
            return {

            };
        }
    });

    Bridge.define("WebMrbc.ProceduresCall", {
        inherits: [WebMrbc.Block],
        quarkConnections_: null,
        quarkIds_: null,
        rendered: false,
        defType_: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        getProcedureCall: function () {
            // The NAME field is guaranteed to exist, null will never be returned.
            return (this.getFieldValue("NAME"));
        },
        renameProcedure: function (oldName, newName) {
            if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
                this.setFieldValue(newName, "NAME");
                this.setTooltip(System.String.replaceAll((this.outputConnection != null ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP), "%1", newName));
            }
        },
        setProcedureParameters_: function (paramNames, paramIds) {
            // Data structures:
            // this.arguments = ["x", "y"]
            //     Existing param names.
            // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
            //     Look-up of paramIds to connections plugged into the call block.
            // this.quarkIds_ = ["piua", "f8b_"]
            //     Existing param IDs.
            // Note that quarkConnections_ may include IDs that no longer exist, but
            // which might reappear if a param is reattached in the mutator.
            var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace);
            var mutatorOpen = defBlock != null && defBlock.mutator != null && defBlock.mutator.isVisible();
            if (!mutatorOpen) {
                this.quarkConnections_ = new (System.Collections.Generic.Dictionary$2(String,Blockly.Connection))();
                this.quarkIds_ = null;
            }
            if (paramIds == null) {
                // Reset the quarks (a mutator is about to open).
                return;
            }
            if (goog.array.equals(this.arguments_, paramNames)) {
                // No change.
                this.quarkIds_ = paramIds;
                return;
            }
            if (paramIds.length !== paramNames.length) {
                throw new System.Exception("Error: paramNames and paramIds must be the same length.");
            }
            this.setCollapsed(false);
            if (this.quarkIds_ == null) {
                // Initialize tracking for this block.
                this.quarkConnections_ = new (System.Collections.Generic.Dictionary$2(String,Blockly.Connection))();
                if (Bridge.referenceEquals(paramNames.join("\n"), this.arguments_.join("\n"))) {
                    // No change to the parameters, allow quarkConnections_ to be
                    // populated with the existing connections.
                    this.quarkIds_ = paramIds;
                } else {
                    this.quarkIds_ = System.Array.init(0, null);
                }
            }
            // Switch off rendering while the block is rebuilt.
            var savedRendered = this.rendered;
            this.rendered = false;
            // Update the quarkConnections_ with existing connections.
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var input = this.getInput(System.String.concat("ARG", i));
                if (input != null) {
                    var connection = input.connection.targetConnection;
                    this.quarkConnections_.set(this.quarkIds_[i], connection);
                    if (mutatorOpen && connection != null && paramIds.indexOf(this.quarkIds_[i]) === -1) {
                        // This connection should no longer be attached to this block.
                        connection.disconnect();
                        connection.getSourceBlock().bumpNeighbours_();
                    }
                }
            }
            // Rebuild the block"s arguments.
            this.arguments_ = (System.Array.init(0, null)).concat.apply((System.Array.init(0, null)), paramNames);
            this.updateShape_();
            this.quarkIds_ = paramIds;
            // Reconnect any child blocks.
            if (this.quarkIds_ != null) {
                for (var i1 = 0; i1 < this.arguments_.length; i1 = (i1 + 1) | 0) {
                    var quarkId = this.quarkIds_[i1];
                    var connection1 = { };
                    if (this.quarkConnections_.tryGetValue(quarkId, connection1)) {
                        if (!Blockly.Mutator.reconnect(connection1.v, this, System.String.concat("ARG", i1))) {
                            // Block no longer exists or has been attached elsewhere.
                            delete this.quarkConnections_.get(quarkId);
                        }
                    }
                }
            }
            // Restore rendering and show the changes.
            this.rendered = savedRendered;
            if (this.rendered) {
                this.render();
            }
        },
        updateShape_: function () {
            var i;
            for (i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var field = this.getField(System.String.concat("ARGNAME", i));
                if (field != null) {
                    // Ensure argument name is up to date.
                    // The argument name field is deterministic based on the mutation,
                    // no need to fire a change event.
                    Blockly.Events.disable();
                    try {
                        field.setValue(this.arguments_[i]);
                    }
                    finally {
                        Blockly.Events.enable();
                    }
                } else {
                    // Add new input.
                    field = new Blockly.FieldLabel(this.arguments_[i]);
                    var input = this.appendValueInput(System.String.concat("ARG", i)).setAlign(Blockly.ALIGN_RIGHT).appendField(field, System.String.concat("ARGNAME", i));
                    input.init();
                }
            }
            // Remove deleted inputs.
            while (this.getInput(System.String.concat("ARG", i)) != null) {
                this.removeInput(System.String.concat("ARG", i));
                i = (i + 1) | 0;
            }
            // Add "with:" if there are parameters, remove otherwise.
            var topRow = this.getInput("TOPROW");
            if (topRow != null) {
                if (this.arguments_.length !== 0) {
                    if (this.getField("WITH") == null) {
                        topRow.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH");
                        topRow.init();
                    }
                } else {
                    if (this.getField("WITH") != null) {
                        topRow.removeField("WITH");
                    }
                }
            }
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("name", this.getProcedureCall());
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                var parameter = document.createElement("arg");
                parameter.setAttribute("name", this.arguments_[i]);
                container.appendChild(parameter);
            }
            return container;
        },
        domToMutation: function (xmlElement) {
            var name = xmlElement.getAttribute("name");
            this.renameProcedure(this.getProcedureCall(), name);
            var args = System.Array.init(0, null);
            var paramIds = System.Array.init(0, null);
            var childNode;
            for (var i = 0; ((childNode = xmlElement.childNodes[i])) != null; i = (i + 1) | 0) {
                if (Bridge.referenceEquals(childNode.nodeName.toLowerCase(), "arg")) {
                    args.push(childNode.getAttribute("name"));
                    paramIds.push(childNode.getAttribute("paramId"));
                }
            }
            this.setProcedureParameters_(args, paramIds);
        },
        renameVar: function (oldName, newName) {
            for (var i = 0; i < this.arguments_.length; i = (i + 1) | 0) {
                if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                    this.arguments_[i] = newName;
                    this.getField(System.String.concat("ARGNAME", i)).setValue(newName);
                }
            }
        },
        onchange: function (e) {
            if (this.workspace == null || this.workspace.isFlyout) {
                // Block is deleted or is in a flyout.
                return;
            }
            if (Bridge.referenceEquals(e.type, Blockly.Events.CREATE) && Bridge.cast(e, Blockly.Events.Create).ids.indexOf(this.id) !== -1) {
                // Look for the case where a procedure call was created (usually through
                // paste) and there is no matching definition.  In this case, create
                // an empty definition block with the correct signature.
                var name = this.getProcedureCall();
                var def = Blockly.Procedures.getDefinition(name, this.workspace);
                if (def != null && (!Bridge.referenceEquals(def.type, this.defType_) || !Bridge.referenceEquals(JSON.stringify(def.arguments_), JSON.stringify(this.arguments_)))) {
                    // The signatures don"t match.
                    def = null;
                }
                if (def == null) {
                    Blockly.Events.setGroup(e.group);
                    var xml = goog.dom.createDom("xml");
                    var block = goog.dom.createDom("block");
                    block.setAttribute("type", this.defType_);
                    var xy = this.getRelativeToSurfaceXY();
                    var x = xy.x + ((Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1)) | 0);
                    var y = xy.y + ((Blockly.SNAP_RADIUS * 2) | 0);
                    block.setAttribute("x", System.Double.format(x, 'G'));
                    block.setAttribute("y", System.Double.format(y, 'G'));
                    var mutation = this.mutationToDom();
                    block.appendChild(mutation);
                    var field = goog.dom.createDom("field");
                    field.setAttribute("name", "NAME");
                    field.appendChild(document.createTextNode(this.getProcedureCall()));
                    block.appendChild(field);
                    xml.appendChild(block);
                    Blockly.Xml.domToWorkspace(xml, this.workspace);
                    Blockly.Events.setGroup(System.Boolean.toString((false)));
                }
            } else if (Bridge.referenceEquals(e.type, Blockly.Events.DELETE)) {
                // Look for the case where a procedure definition has been deleted,
                // leaving this block (a procedure call) orphaned.  In this case, delete
                // the orphan.
                var name1 = this.getProcedureCall();
                var def1 = Blockly.Procedures.getDefinition(name1, this.workspace);
                if (def1 == null) {
                    Blockly.Events.setGroup(e.group);
                    this.dispose(true);
                    Blockly.Events.setGroup(System.Boolean.toString((false)));
                }
            }
        }
    });

    Bridge.define("WebMrbc.ProceduresIfreturnBlock", {
        inherits: [WebMrbc.Block],
        FUNCTION_TYPES: null,
        config: {
            init: function () {
                this.FUNCTION_TYPES = ["procedures_defnoreturn", "procedures_defreturn"];
            }
        },
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
            this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
            this.setInputsInline(true);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
            this.hasReturnValue_ = true;
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("value", this.hasReturnValue_ ? "1" : "0");
            return container;
        },
        domToMutation: function (xmlElement) {
            var value = xmlElement.getAttribute("value");
            this.hasReturnValue_ = (Bridge.referenceEquals(value, "1"));
            if (!this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
            }
        },
        onchange: function (e) {
            var legal = false;
            // Is the block nested in a procedure?
            var block = Bridge.cast(this, WebMrbc.Block);
            do {
                if (this.FUNCTION_TYPES.indexOf(block.type) !== -1) {
                    legal = true;
                    break;
                }
                block = block.getSurroundParent();
            } while (block != null);
            if (legal) {
                // If needed, toggle whether this block has a return value.
                if (Bridge.referenceEquals(block.type, "procedures_defnoreturn") && this.hasReturnValue_) {
                    this.removeInput("VALUE");
                    this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                    this.hasReturnValue_ = false;
                } else if (Bridge.referenceEquals(block.type, "procedures_defreturn") && !this.hasReturnValue_) {
                    this.removeInput("VALUE");
                    this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                    this.hasReturnValue_ = true;
                }
                this.setWarningText(null);
            } else {
                this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
            }
        }
    });

    Bridge.define("WebMrbc.ProceduresMutatorargBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var field = new Blockly.FieldTextInput("x", Bridge.fn.bind(this, this.validator_));
            this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(field, "NAME");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
            this.contextMenu = false;

            // Create the default variable when we drag the block in from the flyout.
            // Have to do this after installing the field on the block.
            field.onFinishEditing_ = Bridge.fn.bind(this, this.createNewVar_);
            field.onFinishEditing_("x");
        },
        validator_: function (newVar) {
            newVar = newVar.replace(new RegExp("[\\s\\xa0]+", "g"), " ").replace(new RegExp("^ | $", "g"), "");
            return newVar;
        },
        createNewVar_: function (newText) {
            var source = this.sourceBlock_;
            if (source != null && source.workspace != null && source.workspace.options != null && source.workspace.options.parentWorkspace != null) {
                source.workspace.options.parentWorkspace.createVariable(newText);
            }
        }
    });

    Bridge.define("WebMrbc.ProceduresMutatorcontainerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
            this.appendStatementInput("STACK");
            this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.PwmBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("PWM出力").appendField(WebMrbc.GrSakura.pwmPins(), "PIN_NO");
            this.appendValueInput("PWM_OUT").setCheck("Number").appendField("出力PWM比率");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.PwmValueBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 255, 1), "PWM_VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("PWM 0～255");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RandomBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("乱数を取得");
            this.appendValueInput("MIN").setCheck("Number").appendField("最小値");
            this.appendValueInput("MAX").setCheck("Number").appendField("最大値");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RandomSeedBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("乱数を得るための種を与えます");
            this.appendValueInput("VALUE").setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.Range", {
        inherits: [WebMrbc.Value],
        _Min: System.Int64(0),
        _Max: System.Int64(0),
        _Disp: null,
        _MinDisp: null,
        _MaxDisp: null,
        _Unit: null,
        _InitialValue: System.Int64(0),
        ctor: function (min, max, disp) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._Min = min;
            this._Max = max;
            this._Disp = disp;
            this._MinDisp = "";
            this._MaxDisp = "";
            this._Unit = "";
            this._InitialValue = min;
        },
        $ctor1: function (min, max, disp, minDisp, maxDisp, unit) {
            this.$initialize();
            WebMrbc.Value.ctor.call(this);
            this._Min = min;
            this._Max = max;
            this._Disp = disp;
            this._MinDisp = minDisp;
            this._MaxDisp = maxDisp;
            this._Unit = unit;
            this._InitialValue = min;
        },
        getMin: function () {
            return this._Min;
        },
        getMax: function () {
            return this._Max;
        },
        getDisp: function () {
            return this._Disp;
        },
        getMinDisp: function () {
            return this._MinDisp;
        },
        getMaxDisp: function () {
            return this._MaxDisp;
        },
        getUnit: function () {
            return this._Unit;
        },
        getInitialValue$1: function () {
            return this._InitialValue;
        },
        setInitialValue$1: function (value) {
            this._InitialValue = value;
        },
        getInitialValue: function () {
            return this._InitialValue.toString(16).toUpperCase();
        },
        getDisp$1: function (value) {
            return System.String.concat(System.String.concat(this._Disp, value.toString()), this._Unit);
        }
    });

    Bridge.define("WebMrbc.ReleaseEsvBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 を破棄", [new $_.$AnonymousType$18("field_variable", "ESV", "item")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.RtcDateTimeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("YEAR").setCheck("Number").appendField("年");
            this.appendValueInput("MONTH").setCheck("Number").appendField("月");
            this.appendValueInput("DAY").setCheck("Number").appendField("日");
            this.appendValueInput("HOUR").setCheck("Number").appendField("時");
            this.appendValueInput("MINUTE").setCheck("Number").appendField("分");
            this.appendValueInput("SECOND").setCheck("Number").appendField("秒");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcDateTimeItemBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldVariable("item"), "ARRAY").appendField(new Blockly.FieldDropdown([["年", "0"], ["月", "1"], ["日", "2"], ["時", "3"], ["分", "4"], ["秒", "5"], ["週", "6"]]), "ITEM");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcDayBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("1", 1, 31, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("日(1-31)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcDeinitBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("RTCを停止します");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcGetTimeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("RTCの時計を取得します");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcHourBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 23, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("時(0-23)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcInitBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("RTCを起動します");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcMinuteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 59, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("分(0-59)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcMonthBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("1", 1, 12, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("月(1-12)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcSecondBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 59, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("秒(0-59)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcSetDateTimeItemBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldVariable("item"), "ARRAY").appendField("の").appendField(new Blockly.FieldDropdown([["年", "0"], ["月", "1"], ["日", "2"], ["時", "3"], ["分", "4"], ["秒", "5"], ["週", "6"]]), "ITEM").appendField("に");
            this.appendValueInput("VALUE").setCheck("Number");
            this.appendDummyInput().appendField("を設定");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcSettimeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("RTCの時計をセットします");
            this.appendValueInput("DATE").setCheck("Array");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcWeekDayBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldDropdown([["日曜", "0"], ["月曜", "1"], ["火曜", "2"], ["水曜", "3"], ["木曜", "4"], ["金曜", "5"], ["土曜", "6"]]), "VALUE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.RtcYearBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("2017", 2000, 2099, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("年(2000-2099)");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.Ruby", {
        inherits: [WebMrbc.Generator],
        ORDER_ATOMIC: 0,
        ORDER_MEMBER: 2,
        ORDER_FUNCTION_CALL: 2,
        ORDER_EXPONENTIATION: 3,
        ORDER_LOGICAL_NOT: 4,
        ORDER_UNARY_SIGN: 4,
        ORDER_BITWISE_NOT: 4,
        ORDER_MULTIPLICATIVE: 5,
        ORDER_ADDITIVE: 6,
        ORDER_BITWISE_SHIFT: 7,
        ORDER_BITWISE_AND: 8,
        ORDER_BITWISE_XOR: 9,
        ORDER_BITWISE_OR: 9,
        ORDER_RELATIONAL: 11,
        ORDER_LOGICAL_AND: 13,
        ORDER_LOGICAL_OR: 14,
        ORDER_CONDITIONAL: 15,
        ORDER_NONE: 99,
        INFINITE_LOOP_TRAP: null,
        definitions_: null,
        functionNames_: null,
        variableDB_: null,
        escapeChars_: null,
        config: {
            init: function () {
                this.escapeChars_ = new (System.Collections.Generic.Dictionary$2(String,String))();
            }
        },
        ctor: function () {
            this.$initialize();
            WebMrbc.Generator.ctor.call(this, "Ruby");
            this.addReservedWords("Class,Object,BEGIN,END,__ENCODING__,__END__,__FILE__,__LINE__alias,and,begin,break,case,class,def,defined?,do,else,elsif,end,ensure,false,for,if,in,module,nextnil,not,or,redo,rescue,retry,return,self,super,then,true,undef,unless,until,when,while,yield");

            this.escapeChars_.add("\"", "\\\"");
        },
        i2c_new: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), " = I2c.new("), dropdown_i2c_port_no), ")\n");
            return code;
        },
        i2c_write: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".write("), value_address), ",\""), value_data), "\")\n");
            return code;
        },
        i2c_read: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var value_address_l = Blockly.Ruby.valueToCode(block, "ADDRESS_L", Blockly.Ruby.ORDER_ATOMIC);
            var value_address_h = Blockly.Ruby.valueToCode(block, "ADDRESS_H", Blockly.Ruby.ORDER_ATOMIC);
            var code;
            if (value_address_h == null) {
                code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".read("), value_address_l), ")");
            } else {
                code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".read("), value_address_l), ","), value_address_h), ")");
            }
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_begin: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".begin()\n");
            return code;
        },
        i2c_lwrite: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".lwrite("), value_data), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_end: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var checkbox_stop = Bridge.referenceEquals(block.getFieldValue("STOP"), "TRUE");
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".lwrite("), System.Boolean.toString(checkbox_stop)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_request: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_count = Blockly.Ruby.valueToCode(block, "COUNT", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".request("), value_address), ","), value_count), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_lread: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".lread()");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_available: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".available()");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        i2c_frequency: function (block) {
            var dropdown_i2c_port_no = block.getFieldValue("I2C_PORT_NO");
            var value_frequency = Blockly.Ruby.valueToCode(block, "FREQUENCY", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.i2CPortNameToVariable(dropdown_i2c_port_no), ".frequency("), value_frequency), ")\n");
            return code;
        },
        call: function (block) {
            var value_name = Blockly.Ruby.valueToCode(block, "RET", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(value_name, "\n");
            return code;
        },
        pin_mode: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var dropdown_pin_mode = block.getFieldValue("PIN_MODE");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("pinMode(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ","), WebMrbc.GrSakura.pinModeNameToNum(dropdown_pin_mode)), ")\n");
            return code;
        },
        digital_write: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var dropdown_pin_value = block.getFieldValue("PIN_VALUE");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("digitalWrite(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ","), WebMrbc.GrSakura.pinValueNameToNum(dropdown_pin_value)), ")\n");
            return code;
        },
        digital_read: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = System.String.concat(System.String.concat("digitalRead(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        analog_read: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = System.String.concat(System.String.concat("analogRead(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        pwm: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var value_pwm_out = Blockly.Ruby.valueToCode(block, "PWM_OUT", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("pwm(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ","), value_pwm_out), ")\n");
            return code;
        },
        pwm_value: function (block) {
            var number_pwm_value = block.getFieldValue("PWM_VALUE");
            var code = number_pwm_value;
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        analog_reference: function (block) {
            var dropdown_analog_reference_mode = block.getFieldValue("ANALOG_REFERENCE_MODE");
            var code = System.String.concat(System.String.concat("analogReference(", WebMrbc.GrSakura.analogRefModeNameToNum(dropdown_analog_reference_mode)), ")\n");
            return code;
        },
        init_dac: function (block) {
            var code = "initDac()\n";
            return code;
        },
        analog_dac: function (block) {
            var value_value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("analogDac(", value_value), ")\n");
            return code;
        },
        dac_value: function (block) {
            var number_dac_value = block.getFieldValue("ADC_VALUE");
            var code = number_dac_value;
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        delay: function (block) {
            var value_value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("delay(", value_value), ")\n");
            return code;
        },
        millis: function (block) {
            var code = "millis()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        micros: function (block) {
            var code = "micros()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        led: function (block) {
            var value_sw = Blockly.Ruby.valueToCode(block, "SW", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("led(", value_sw), ")\n");
            return code;
        },
        bit: function (block) {
            var code = "0b";
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT7"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT6"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT5"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT4"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT3"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT2"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT1"), "TRUE")) ? "1" : "0"));
            code = System.String.concat(code, ((Bridge.referenceEquals(block.getFieldValue("BIT0"), "TRUE")) ? "1" : "0"));
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        hexadecimal: function (block) {
            var code = System.String.concat("0x", block.getFieldValue("VALUE"));
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        tone: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var value_frequency = Blockly.Ruby.valueToCode(block, "FREQUENCY", Blockly.Ruby.ORDER_ATOMIC);
            var value_duration = Blockly.Ruby.valueToCode(block, "DURATION", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("tone(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ","), value_frequency), ","), value_duration), ")\n");
            return code;
        },
        tone_value: function (block) {
            var number_tone_value = block.getFieldValue("TONE_VALUE");
            var code = number_tone_value;
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        no_tone: function (block) {
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var code = System.String.concat(System.String.concat("noTone(", WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ")\n");
            return code;
        },
        random_seed: function (block) {
            var value_name = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("randomSeed(", value_name), ")\n");
            return code;
        },
        random: function (block) {
            var value_min = Blockly.Ruby.valueToCode(block, "MIN", Blockly.Ruby.ORDER_ATOMIC);
            var value_max = Blockly.Ruby.valueToCode(block, "MAX", Blockly.Ruby.ORDER_ATOMIC);
            var code;
            if (System.String.isNullOrEmpty(value_min)) {
                code = System.String.concat(System.String.concat("random(", value_max), ")");
            } else {
                code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("random(", value_min), ","), value_max), ")");
            }
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_open: function (block) {
            var dropdown_mem_file_no = block.getFieldValue("MEM_FILE_NO");
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_eep_open_mode = block.getFieldValue("EEP_OPEN_MODE");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("MemFile.open(", WebMrbc.GrSakura.memFileHandlerNameToNum(dropdown_mem_file_no)), ","), value_filename), ","), WebMrbc.GrSakura.memOpenModeNameToNum(dropdown_eep_open_mode)), ")\n");
            return code;
        },
        memfile_close: function (block) {
            var dropdown_mem_file_no = block.getFieldValue("MEM_FILE_NO");
            var code = System.String.concat(System.String.concat("MemFile.close(", WebMrbc.GrSakura.memFileHandlerNameToNum(dropdown_mem_file_no)), ")\n");
            return code;
        },
        memfile_read: function (block) {
            var dropdown_mem_file_no = block.getFieldValue("MEM_FILE_NO");
            var code = System.String.concat(System.String.concat("MemFile.read(", WebMrbc.GrSakura.memFileHandlerNameToNum(dropdown_mem_file_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_write: function (block) {
            var dropdown_mem_file_no = block.getFieldValue("MEM_FILE_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("MemFile.write(", WebMrbc.GrSakura.memFileHandlerNameToNum(dropdown_mem_file_no)), ","), value_data), ","), value_length), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_seek: function (block) {
            var dropdown_mem_file_no = block.getFieldValue("MEM_FILE_NO");
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("MemFile.seek(", WebMrbc.GrSakura.memFileHandlerNameToNum(dropdown_mem_file_no)), ","), value_position), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_cp: function (block) {
            var value_src_filename = Blockly.Ruby.valueToCode(block, "SRC_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var value_dst_filename = Blockly.Ruby.valueToCode(block, "DST_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_eep_cp_mode = block.getFieldValue("EEP_CP_MODE");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("MemFile.cp(", value_dst_filename), ","), value_dst_filename), ","), WebMrbc.GrSakura.memCpModeNameToNum(dropdown_eep_cp_mode)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        memfile_rm: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("MemFile.rm(", value_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_year: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_month: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_day: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_hour: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_minute: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_second: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_weekday: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_datetime: function (block) {
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("[", Blockly.Ruby.valueToCode(block, "YEAR", Blockly.Ruby.ORDER_ATOMIC)), ", "), Blockly.Ruby.valueToCode(block, "MONTH", Blockly.Ruby.ORDER_ATOMIC)), ", "), Blockly.Ruby.valueToCode(block, "DAY", Blockly.Ruby.ORDER_ATOMIC)), ", "), Blockly.Ruby.valueToCode(block, "HOUR", Blockly.Ruby.ORDER_ATOMIC)), ", "), Blockly.Ruby.valueToCode(block, "MINUTE", Blockly.Ruby.ORDER_ATOMIC)), ", "), Blockly.Ruby.valueToCode(block, "SECOND", Blockly.Ruby.ORDER_ATOMIC)), "]");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_get_datetime_item: function (block) {
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("@", Blockly.Ruby.variableDB_.getName(block.getFieldValue("ARRAY"), Blockly.Variables.NAME_TYPE)), "["), block.getFieldValue("ITEM")), "]");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_set_datetime_item: function (block) {
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("@", Blockly.Ruby.variableDB_.getName(block.getFieldValue("ARRAY"), Blockly.Variables.NAME_TYPE)), "["), block.getFieldValue("ITEM")), "] = "), Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC)), "\n");
            return code;
        },
        rtc_gettime: function (block) {
            var code = "Rtc.getTime()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_settime: function (block) {
            var value_date = Blockly.Ruby.valueToCode(block, "DATE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("Rtc.setTime(", value_date), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_deinit: function (block) {
            var code = "Rtc.deinit()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        rtc_init: function (block) {
            var code = "Rtc.init()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_exists: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("SD.exists(", value_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_mkdir: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "DIRNAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("SD.mkdir(", value_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_remove: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("SD.remove(", value_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_copy: function (block) {
            var value_src_filename = Blockly.Ruby.valueToCode(block, "SRC_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var value_dst_filename = Blockly.Ruby.valueToCode(block, "DST_FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("SD.copy(", value_src_filename), ","), value_dst_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_rmdir: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "DIRNAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("SD.rmdir(", value_filename), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_open: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_sd_open_mode = block.getFieldValue("SD_OPEN_MODE");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("SD.open(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ","), value_filename), ","), WebMrbc.GrSakura.sdOpenModeNameToNum(dropdown_sd_open_mode)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_close: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var code = System.String.concat(System.String.concat("SD.close(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_read: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var code = System.String.concat(System.String.concat("SD.read(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_seek: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("SD.seek(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ","), value_position), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_write: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("SD.write(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ","), value_data), ","), value_length), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_flush: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var code = System.String.concat(System.String.concat("SD.flush(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ")\n");
            return code;
        },
        sd_size: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var code = System.String.concat(System.String.concat("SD.size(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        sd_position: function (block) {
            var dropdown_sd_file_no = block.getFieldValue("SD_FILE_NO");
            var code = System.String.concat(System.String.concat("SD.position(", WebMrbc.GrSakura.sdFileHandlerNameToNum(dropdown_sd_file_no)), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        bps_value: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_new: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var value_bps = Blockly.Ruby.valueToCode(block, "BPS", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), " = Serial.new("), WebMrbc.GrSakura.serialPortNameToNum(dropdown_serial_port_no)), ","), value_bps), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_bps: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var value_bps = Blockly.Ruby.valueToCode(block, "BPS", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".bps("), value_bps), ")\n");
            return code;
        },
        serial_print: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var value_str = Blockly.Ruby.valueToCode(block, "STR", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".print("), value_str), ")\n");
            return code;
        },
        serial_println: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var value_str = Blockly.Ruby.valueToCode(block, "STR", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".println("), value_str), ")\n");
            return code;
        },
        serial_available: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".available()");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_read: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".read()");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_write: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".bps("), value_data), ","), value_length), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        serial_flash: function (block) {
            var dropdown_serial_port_no = block.getFieldValue("SERIAL_PORT_NO");
            var code = System.String.concat(WebMrbc.GrSakura.serialPortNameToVariable(dropdown_serial_port_no), ".flash()\n");
            return code;
        },
        servo_angle: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_us_value: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_attach: function (block) {
            var number_ch = block.getFieldValue("CH");
            var dropdown_pin_no = block.getFieldValue("PIN_NO");
            var text_min = block.getFieldValue("MIN");
            var text_max = block.getFieldValue("MAX");
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("Servo.attach(", number_ch), ","), WebMrbc.GrSakura.pinNameToNum(dropdown_pin_no)), ","), text_min), ","), text_max), ")\n");
            return code;
        },
        servo_write: function (block) {
            var number_ch = block.getFieldValue("CH");
            var value_angle = Blockly.Ruby.valueToCode(block, "ANGLE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("Servo.write(", number_ch), ","), value_angle), ")\n");
            return code;
        },
        servo_us: function (block) {
            var number_ch = block.getFieldValue("CH");
            var value_us = Blockly.Ruby.valueToCode(block, "US", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("Servo.us(", number_ch), ","), value_us), ")\n");
            return code;
        },
        servo_read: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = System.String.concat(System.String.concat("Servo.read(", number_ch), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_attached: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = System.String.concat(System.String.concat("Servo.attached(", number_ch), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        servo_detach: function (block) {
            var number_ch = block.getFieldValue("CH");
            var code = System.String.concat(System.String.concat("Servo.detach(", number_ch), ")\n");
            return code;
        },
        system_exit: function (block) {
            var code = "System.exit()\n";
            return code;
        },
        system_setrun: function (block) {
            var value_filename = Blockly.Ruby.valueToCode(block, "FILENAME", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat("System.setrun(", value_filename), ")\n");
            return code;
        },
        system_version: function (block) {
            var code = "System.version()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_push: function (block) {
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("System.push(", value_address), ","), value_data), ","), value_length), ")\n");
            return code;
        },
        system_pop: function (block) {
            var value_address = Blockly.Ruby.valueToCode(block, "ADDRESS", Blockly.Ruby.ORDER_ATOMIC);
            var value_length = Blockly.Ruby.valueToCode(block, "LENGTH", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("System.pop(", value_address), ","), value_length), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_fileload: function (block) {
            var code = "System.fileload()\n";
            return code;
        },
        system_reset: function (block) {
            var code = "System.reset()\n";
            return code;
        },
        system_use_sd: function (block) {
            var code = "System.useSD()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_use_wifi: function (block) {
            var code = "System.useWiFi()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        system_get_mrb_path: function (block) {
            var code = "System.getMrbPath()";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        property_attribute: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        service_code: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        node_id: function (block) {
            var code = block.getFieldValue("VALUE");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        get_property_info: function (block) {
            var code = System.String.concat("prop.", block.getFieldValue("MEMBER"));
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        save_received_property: function (block) {
            var code = "prop.set_exinf(src)\n";
            return code.toString();
        },
        get_saved_property: function (block) {
            var code = "prop.exinf";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        set_announce_request: function (block) {
            var data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = new System.Text.StringBuilder();
            code.append("if (prop.anno)\n");
            code.append(System.String.concat(System.String.concat("\tprop.set_anno(", data), " != src)\n"));
            code.append("end\n");
            return code.toString();
        },
        data_to_number: function (block) {
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_width = block.getFieldValue("WIDTH");
            var code = "";
            var functionName;

            switch (dropdown_width) {
                case "BYTE": 
                    code = System.String.concat(System.String.concat("src.getbyte(", value_position), ")");
                    break;
                case "SHORT": 
                    functionName = Blockly.Ruby.provideFunction_("getshort", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(str, pos)"), "\t(src.getbyte(pos) << 8) + src.getbyte(pos + 1)", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(functionName, "(src, "), value_position), ")");
                    break;
                case "INT": 
                    functionName = Blockly.Ruby.provideFunction_("getint", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(str, pos)"), "\t(src.getbyte(pos) << 24) + (src.getbyte(pos + 1) << 16) + (src.getbyte(pos + 2) << 8) + src.getbyte(pos + 3)", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(functionName, "(src, "), value_position), ")");
                    break;
            }

            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        number_to_data: function (block) {
            var value_position = Blockly.Ruby.valueToCode(block, "POSITION", Blockly.Ruby.ORDER_ATOMIC);
            var dropdown_width = block.getFieldValue("WIDTH");
            var value_value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_ATOMIC);
            var code = "";
            var functionName;

            switch (dropdown_width) {
                case "BYTE": 
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("src.setbyte(", value_position), ", "), value_value), ")\n");
                    break;
                case "SHORT": 
                    functionName = Blockly.Ruby.provideFunction_("setshort", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(str, pos, value)"), "\tsrc.setbyte(pos, (value >> 8) & 0xFF)", "\tsrc.setbyte(pos + 1, value & 0xFF)", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "(src, "), value_position), ", "), value_value), ")\n");
                    break;
                case "INT": 
                    functionName = Blockly.Ruby.provideFunction_("setint", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(str, pos, value)"), "\tsrc.setbyte(pos, (value >> 24) & 0xFF)", "\tsrc.setbyte(pos + 1, (value >> 16) & 0xFF)", "\tsrc.setbyte(pos + 2, (value >> 8) & 0xFF)", "\tsrc.setbyte(pos + 3, value & 0xFF)", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "(src, "), value_position), ", "), value_value), ")\n");
                    break;
            }
            return code;
        },
        no_op: function (block) {
            switch (block.getInputName()) {
                case "SET": 
                    return "return 0\n";
                case "GET": 
                    return System.String.concat(System.String.concat("return ", Blockly.Ruby.quote_("")), "\n");
            }
            return "return\n";
        },
        received_data: function (block) {
            var code = "src";
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        received_data_size: function (block) {
            var code = "0";
            switch (block.getInputName()) {
                case "SET": 
                case "SET_RET": 
                    code = "src.bytesize";
                    break;
                case "GET": 
                    code = "size";
                    break;
            }
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        data_join: function (block) {
            var code;
            if (block.itemCount_ === 0) {
                return ["''", this.ORDER_ATOMIC];
            } else if (block.itemCount_ === 1) {
                var argument0 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = "''";
                }
                code = System.String.concat(argument0, ".chr");
                return [code, this.ORDER_FUNCTION_CALL];
            } else if (block.itemCount_ === 2) {
                var argument01 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument01)) {
                    argument01 = "''";
                }
                var argument1 = Blockly.Ruby.valueToCode(block, "ADD1", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument1)) {
                    argument1 = "''";
                }
                code = System.String.concat(System.String.concat(System.String.concat(argument01, ".chr + "), argument1), ".chr");
                return [code, this.ORDER_UNARY_SIGN];
            } else {
                var codes = System.Array.init(0, null);
                for (var n = 0; n < block.itemCount_; n = (n + 1) | 0) {
                    var temp = Blockly.Ruby.valueToCode(block, System.String.concat("ADD", n), Blockly.Ruby.ORDER_NONE);
                    if (System.String.isNullOrEmpty(temp)) {
                        temp = "''";
                    }
                    codes[n] = System.String.concat(temp, ".chr");
                }
                code = codes.join(" + ");
                return [code, this.ORDER_FUNCTION_CALL];
            }
        },
        create_esv_get: function (block) {
            var dropdown_type = block.getFieldValue("TYPE");
            var value_epc = Blockly.Ruby.valueToCode(block, "EPC", Blockly.Ruby.ORDER_ATOMIC);
            // nilにはリモートノードを指定できる
            var code = System.String.concat(System.String.concat(System.String.concat(dropdown_type, "(nil, "), value_epc), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        create_esv_set: function (block) {
            var dropdown_type = block.getFieldValue("TYPE");
            var value_epc = Blockly.Ruby.valueToCode(block, "EPC", Blockly.Ruby.ORDER_ATOMIC);
            var value_edt = Blockly.Ruby.valueToCode(block, "EDT", Blockly.Ruby.ORDER_ATOMIC);
            // nilにはリモートノードを指定できる
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(dropdown_type, "(nil, "), value_epc), ", "), value_edt), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        esv_add_edt: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var value_epc = Blockly.Ruby.valueToCode(block, "EPC", Blockly.Ruby.ORDER_ATOMIC);
            var value_edt = Blockly.Ruby.valueToCode(block, "EDT", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(variable_esv, ".add_edt("), value_epc), ", "), value_edt), ")\n");
            return code;
        },
        esv_add_epc: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var value_epc = Blockly.Ruby.valueToCode(block, "EPC", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(variable_esv, ".add_epc("), value_epc), ")\n");
            return code;
        },
        send_esv: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var code = System.String.concat(System.String.concat("snd_esv(", variable_esv), ")\n");
            return code;
        },
        release_esv: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var code = System.String.concat(System.String.concat("rel_esv(", variable_esv), ")\n");
            return code;
        },
        notify_initial_esv: function (block) {
            var code = "ntf_inl()\n";
            return code;
        },
        esv_get_esv: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var code = System.String.concat(variable_esv, ".esv");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        esv_iterate: function (block) {
            var variable_esv = Blockly.Ruby.variableDB_.getName(block.getFieldValue("ESV"), Blockly.Variables.NAME_TYPE);
            var statements_do = Blockly.Ruby.statementToCode(block, "DO");
            var code = "";
            code = System.String.concat(code, "itr = esv.itr_ini()\n");
            code = System.String.concat(code, "itr.itr_nxt()\n");
            code = System.String.concat(code, "until itr.is_eof do\n");
            code = System.String.concat(code, statements_do);
            code = System.String.concat(code, "\titr.itr_nxt()\n");
            code = System.String.concat(code, "end\n");
            return code;
        },
        esv_iterator: function (block) {
            var dropdown_item = block.getFieldValue("ITEM");
            var code = System.String.concat("itr.", dropdown_item);
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        svctask_set_timer: function (block) {
            var variable_svc = Blockly.Ruby.variableDB_.getName(block.getFieldValue("SVC"), Blockly.Variables.NAME_TYPE);
            var value_timer = Blockly.Ruby.valueToCode(block, "TIMER", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(variable_svc, ".set_timer("), value_timer), ")\n");
            return code;
        },
        svctask_timer: function (block) {
            var variable_svc = Blockly.Ruby.variableDB_.getName(block.getFieldValue("SVC"), Blockly.Variables.NAME_TYPE);
            var code = System.String.concat(variable_svc, ".timer");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        svctask_progress: function (block) {
            var variable_svc = Blockly.Ruby.variableDB_.getName(block.getFieldValue("SVC"), Blockly.Variables.NAME_TYPE);
            var value_elapse = Blockly.Ruby.valueToCode(block, "ELAPSE", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(variable_svc, ".progress("), value_elapse), ")\n");
            return code;
        },
        svctask_recv_msg: function (block) {
            var variable_svc = Blockly.Ruby.variableDB_.getName(block.getFieldValue("SVC"), Blockly.Variables.NAME_TYPE);
            var value_endpoint = Blockly.Ruby.valueToCode(block, "ENDPOINT", Blockly.Ruby.ORDER_ATOMIC);
            var value_data = Blockly.Ruby.valueToCode(block, "DATA", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(variable_svc, ".recv_msg("), value_endpoint), ", "), value_data), ")\n");
            return code;
        },
        svctask_call_timeout: function (block) {
            var variable_svc = Blockly.Ruby.variableDB_.getName(block.getFieldValue("SVC"), Blockly.Variables.NAME_TYPE);
            var code = System.String.concat(variable_svc, ".call_timeout()\n");
            return code;
        },
        svctask_is_match: function (block) {
            var value_node = Blockly.Ruby.valueToCode(block, "NODE", Blockly.Ruby.ORDER_ATOMIC);
            var value_edtat = Blockly.Ruby.valueToCode(block, "EDTAT", Blockly.Ruby.ORDER_ATOMIC);
            var value_endpoint = Blockly.Ruby.valueToCode(block, "ENDPOINT", Blockly.Ruby.ORDER_ATOMIC);
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("is_match(", value_node), ", "), value_edtat), ", "), value_endpoint), ")");
            return [code, Blockly.Ruby.ORDER_ATOMIC];
        },
        defineSvcTask: function (workspace, localNode) {
            var $t, $t1;
            var code = Blockly.Ruby.workspaceToCode(workspace.workspace);
            var identifier = workspace.getIdentifier();
            var funcs = System.Array.init(0, null);

            var blocks = Blockly.mainWorkspace.getTopBlocks(true);
            for (var i = 0; i < blocks.length; i = (i + 1) | 0) {
                var block = blocks[i];
                var name;

                switch (block.type) {
                    case "procedures_defnoreturn": 
                        name = block.getFieldValue("NAME");
                        switch (name) {
                            case "setup": 
                            case "recv_esv": 
                            case "break_wait": 
                            case "timeout": 
                            case "snd_msg": 
                                funcs.push(name);
                                break;
                        }
                        break;
                    case "procedures_defreturn": 
                        name = block.getFieldValue("NAME");
                        switch (name) {
                            case "is_local_addr": 
                            case "is_multicast_addr": 
                            case "is_valid_addrid": 
                            case "get_local_addr": 
                            case "get_multicast_addr": 
                            case "get_remote_addr": 
                            case "get_remote_id": 
                            case "set_remote_addr": 
                            case "add_remote_addr": 
                                funcs.push(name);
                                break;
                        }
                        break;
                }
            }

            var wa = new WebMrbc.CodeGenWorkArea();
            var sb = new System.Text.StringBuilder();

            sb.appendLine(System.String.concat(System.String.concat("class ", identifier), " ECNL::SvcTask"));
            sb.appendLine("\tdef initialize()");
            sb.appendLine(System.String.concat(System.String.concat(System.String.concat(System.String.concat("\t\t@profile = ", localNode.identifier), ".new("), localNode.instanceCode), ")"));
            switch (localNode.objects.length) {
                case 0: 
                    sb.appendLine("\t\t@devices = []");
                    break;
                case 1: 
                    {
                        var o = localNode.objects[0];
                        sb.appendLine(System.String.concat(System.String.concat(System.String.concat(System.String.concat("\t\t@devices = [ ", o.identifier), ".new("), o.instanceCode), ", @profile) ]"));
                    }
                    break;
                default: 
                    sb.appendLine("\t\t@devices = [");
                    $t = Bridge.getEnumerator(localNode.objects);
                    while ($t.moveNext()) {
                        var o1 = $t.getCurrent();
                        sb.appendLine(System.String.concat(System.String.concat(System.String.concat(System.String.concat("\t\t\t", o1.identifier), ".new("), o1.instanceCode), ", @profile) ]"));
                    }
                    sb.appendLine("\t\t]");
                    break;
            }
            sb.appendLine("\t\t@enodadrb_table = []");
            sb.appendLine();
            sb.appendLine("\t\tsuper()");
            if (System.Array.contains(funcs, "setup", String)) {
                sb.appendLine();
                sb.appendLine("\t\tsetup()");
            }
            sb.appendLine("\tend");
            sb.appendLine();
            $t1 = Bridge.getEnumerator(code.split("\n"));
            while ($t1.moveNext()) {
                var line = $t1.getCurrent();
                sb.appendLine(System.String.concat("\t", line));
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "recv_esv", String)) {
                sb.appendLine("\tdef recv_esv(esv)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "break_wait", String)) {
                sb.appendLine("\tdef break_wait(data)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "timeout", String)) {
                sb.appendLine("\tdef timeout()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "snd_msg", String)) {
                sb.appendLine("\tdef snd_msg(ep, data)");
                sb.appendLine("\t\t# 通信レイヤーへ送信");
                sb.appendLine("\t\tTargetBoard::snd_msg(ep, data)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "is_local_addr", String)) {
                sb.appendLine("\tdef is_local_addr(ep)");
                sb.appendLine("\t\tTargetBoard::is_local_addr(ep)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "is_multicast_addr", String)) {
                sb.appendLine("\tdef is_multicast_addr(ep)");
                sb.appendLine("\t\tTargetBoard::is_multicast_addr(ep)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "is_valid_addrid", String)) {
                sb.appendLine("\tdef is_valid_addrid(id)");
                sb.appendLine("\t\t(id >= 0) && ((id - ECNL::ENOD_REMOTE_ID) < @enodadrb_table.length)");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "get_local_addr", String)) {
                sb.appendLine("\tdef get_local_addr()");
                sb.appendLine("\t\tTargetBoard::get_local_addr()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "get_multicast_addr", String)) {
                sb.appendLine("\tdef get_multicast_addr()");
                sb.appendLine("\t\tTargetBoard::get_multicast_addr()");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "get_remote_addr", String)) {
                sb.appendLine("\tdef get_remote_addr(id)");
                sb.appendLine("\t\tindex = id - ECNL::ENOD_REMOTE_ID");
                sb.appendLine("\t\tif (index < 0) || (index >= @enodadrb_table.length)");
                sb.appendLine("\t\t\tnil");
                sb.appendLine("\t\telse");
                sb.appendLine("\t\t\t@enodadrb_table[index]");
                sb.appendLine("\t\tend");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "get_remote_id", String)) {
                sb.appendLine("\t# 通信レイヤーアドレスの同じものを検索");
                sb.appendLine("\tdef get_remote_id(ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif !ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine("\t\t\tif !TargetBoard::equals_addr(ea, ep) then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "set_remote_addr", String)) {
                sb.appendLine("\t# 対応するリモートノードを検索");
                sb.appendLine("\tdef set_remote_addr(edata, ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif !ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine("\t\t\tif !is_match(svc, edata, ep) then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\t# 対応するリモートノードがあれば通信レイヤーアドレスを設定");
                sb.appendLine("\t\t\t@enodadrb_table[id - ECNL::ENOD_REMOTE_ID] = ep");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\tend");
            }
            sb.appendLine();
            if (!System.Array.contains(funcs, "add_remote_addr", String)) {
                sb.appendLine("\t# 空き領域を探して自動登録");
                sb.appendLine("\tdef add_remote_addr(edata, ep)");
                sb.appendLine("\t\tid = ECNL::ENOD_REMOTE_ID - 1");
                sb.appendLine("\t\tfor ea in @enodadrb_table do");
                sb.appendLine("\t\t\tid += 1");
                sb.appendLine("\t\t\tif ea then");
                sb.appendLine("\t\t\t\tnext");
                sb.appendLine("\t\t\tend");
                sb.appendLine();
                sb.appendLine("\t\t\t@enodadrb_table[id - ECNL::ENOD_REMOTE_ID] = ep");
                sb.appendLine();
                sb.appendLine("\t\t\treturn id");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\tif @enodadrb_table.length >= 100 then");
                sb.appendLine("\t\t\treturn ECNL::ENOD_NOT_MATCH_ID");
                sb.appendLine("\t\tend");
                sb.appendLine();
                sb.appendLine("\t\tid = @enodadrb_table.length;");
                sb.appendLine("\t\t@enodadrb_table[id] = ep");
                sb.appendLine();
                sb.appendLine("\t\treturn id + ECNL::ENOD_REMOTE_ID");
                sb.appendLine("\tend");
                sb.appendLine("end");

                code = sb.toString();
            }
            return code;
        },
        itr_code: function () {
            var sb = new System.Text.StringBuilder();

            sb.appendLine("itr = esv.itr_ini()");
            sb.appendLine("itr.itr_nxt()");
            sb.appendLine("until itr.is_eof do");
            sb.appendLine("\tif itr.epc == 0xD6 then");
            sb.appendLine("\t\t# LEDをON");
            sb.appendLine("\t\tdigitalWrite(2, 1)");
            sb.appendLine("\tend");
            sb.appendLine("\titr.itr_nxt()");
            sb.appendLine("end");

            return sb.toString();
        },
        init_smalruby: function (workspace) {
            this.definitions_.receiver_stack = ["main"];
            this.definitions_.eobject_stack = System.Array.init(0, null);
        },
        defineENode: function (enode, workspace) {
            var code = Blockly.Ruby.workspaceToCode(workspace);
            var identifier = enode.identifier;
            var blockName = System.String.concat("enode_", identifier);

            if (Blockly.Ruby.definitions_[blockName] == null) {
                var wa = new WebMrbc.CodeGenWorkArea();
                var cg = new WebMrbc.CodeGenerator(enode);
                var sb = new System.Text.StringBuilder();

                sb.appendLine(System.String.concat(System.String.concat("class ", identifier), " < ECNL::ENode"));
                sb.appendLine("\tdef initialize(eojx3)");
                sb.append(cg.defineEchonetObject("\t\t"));
                sb.appendLine();
                sb.append(cg.configEchonetObject("\t\t"));
                sb.appendLine();
                sb.appendLine("\t\tsuper(eojx3, eprpinib_table)");
                sb.appendLine("\tend");
                sb.appendLine();
                sb.append(code);
                sb.appendLine("end");

                code = sb.toString();
                Blockly.Ruby.definitions_[blockName] = code;
            }
            return code;
        },
        defineEObject: function (eobject, workspace) {
            var code = Blockly.Ruby.workspaceToCode(workspace);
            var identifier = eobject.identifier;
            var wa = new WebMrbc.CodeGenWorkArea();
            var cg = new WebMrbc.CodeGenerator(eobject);
            var sb = new System.Text.StringBuilder();

            sb.appendLine(System.String.concat(System.String.concat("class ", identifier), " < ECNL::EObject"));
            sb.appendLine("\tdef initialize(eojx3, enod)");
            sb.append(cg.defineEchonetObject("\t\t"));
            sb.appendLine();
            sb.append(cg.configEchonetObject("\t\t"));
            sb.appendLine();
            sb.appendLine(System.String.concat(System.String.concat(System.String.concat(System.String.concat("\t\tsuper(", eobject.type.classGroup.classGroupCode), ", "), eobject.type.classCode), ", eojx3, enod, eprpinib_table)"));
            sb.appendLine("\tend");
            sb.appendLine();
            sb.append(code);
            sb.appendLine("end");

            return sb.toString();
        },
        eobjectStack: function () {
            return Bridge.cast(this.definitions_.eobject_stack, Array);
        },
        eobject: function () {
            var t = this.eobjectStack();
            if (t.length === 0) {
                return null;
            }
            return t[((t.length - 1) | 0)];
        },
        receiverStack: function () {
            return Bridge.cast(this.definitions_.receiver_stack, Array);
        },
        receiver: function () {
            var t = this.receiverStack();
            if (t.length === 0) {
                return null;
            }
            return t[((t.length - 1) | 0)];
        },
        receiverName: function (options) {
            if (options === void 0) { options = null; }
            if (options == null) {
                options = new $_.$AnonymousType$25();
            }

            var opts = new $_.$AnonymousType$26(this.eobject(), true);

            for (var o in options) opts[o] = options[o];
            var r = this.receiver();
            if (Bridge.referenceEquals(r, opts.object)) {
                if (opts.dropSelf) {
                    return "";
                } else {
                    return "self.";
                }
            } else {
                return System.String.concat(opts.object.identifier, ".");
            }
        },
        eobjectMethodCall_: function (method, args, options) {
            if (options === void 0) { options = null; }
            var res = this.eobjectMethodCallInput_(method, args, options);
            if (res[0] != null) {
                return System.String.concat(res[0], "\n");
            } else {
                return "";
            }
        },
        eobjectMethodCallInput_: function (method, args, options) {
            if (options === void 0) { options = null; }
            var code;
            if (this.eobject() != null) {
                if (args != null && args.length > 0) {
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(this.receiverName(options), method), "("), args), ")");
                } else {
                    code = System.String.concat(this.receiverName(options), method);
                }
            } else {
                code = null;
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        eobjectSetVariable_: function (name, val, operator) {
            if (operator === void 0) { operator = "="; }
            if (this.eobject() != null) {
                return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(this.receiverName(new $_.$AnonymousType$27(false)), name), operator), " "), val), "\n");
            } else {
                return "";
            }
        },
        eobjectEvent_: function (block, bodyName, name, arg) {
            if (arg === void 0) { arg = null; }
            var c;
            var body;

            if (((c = this.eobject())) != null) {
                this.receiverStack().push(c);
                try {
                    body = this.statementToCode(block, bodyName);
                    if (System.String.isNullOrEmpty(body)) {
                        body = "\n";
                    }
                }
                finally {
                    this.receiverStack().pop();
                }

                if (arg != null) {
                    arg = System.String.concat(", ", arg);
                } else {
                    arg = "";
                }

                return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("\n", this.receiverName(new $_.$AnonymousType$25())), "on(:"), name), arg), ") do\n"), body), "end\n");
            } else {
                return "";
            }
        },
        eproperty_new: function (block) {
            var $t, $t1;
            var text_identifier = block.getFieldValue("IDENTIFIER");
            var value_description = block.getFieldValue("DESCRIPTION");
            var value_property_code = block.getFieldValue("PROPERTY_CODE");
            var value_property_size = block.getFieldValue("PROPERTY_SIZE");
            var statements_set = Blockly.Ruby.statementToCode(block, "SET");
            var value_set_ret = Blockly.Ruby.valueToCode(block, "SET_RET", Blockly.Ruby.ORDER_ATOMIC);
            var statements_get = Blockly.Ruby.statementToCode(block, "GET");
            var value_get_ret = Blockly.Ruby.valueToCode(block, "GET_RET", Blockly.Ruby.ORDER_ATOMIC);
            var code = new System.Text.StringBuilder();
            var indent = "\t";

            code.appendLine(System.String.concat(indent, System.String.format("# {0}設定関数", value_description)));
            code.appendLine(System.String.concat(System.String.concat(System.String.concat(indent, "def "), text_identifier), "_set(prop, src)"));
            indent = System.String.concat(indent, "\t");
            $t = Bridge.getEnumerator(statements_set.split(String.fromCharCode(10)));
            while ($t.moveNext()) {
                var line = $t.getCurrent();
                code.appendLine(System.String.concat(indent, line));
            }
            code.appendLine(System.String.concat(System.String.concat(indent, "return "), value_set_ret));
            indent = indent.substr(0, ((indent.length - 1) | 0));
            code.appendLine(System.String.concat(indent, "end"));
            code.appendLine();

            code.appendLine(System.String.concat(indent, System.String.format("# {0}取得関数", value_description)));
            code.appendLine(System.String.concat(System.String.concat(System.String.concat(indent, "def "), text_identifier), "_get(prop, size)"));
            indent = System.String.concat(indent, "\t");
            $t1 = Bridge.getEnumerator(statements_get.split(String.fromCharCode(10)));
            while ($t1.moveNext()) {
                var line1 = $t1.getCurrent();
                code.appendLine(System.String.concat(indent, line1));
            }
            code.appendLine(System.String.concat(System.String.concat(indent, "return "), value_get_ret));
            indent = indent.substr(0, ((indent.length - 1) | 0));
            code.appendLine(System.String.concat(indent, "end"));
            code.appendLine();

            return code.toString();
        },
        defineMainLoop: function (workspace, localNode) {
            var code = Blockly.Ruby.workspaceToCode(workspace.workspace);
            var sb = new System.Text.StringBuilder();

            sb.append(code);
            sb.appendLine();

            sb.appendLine("ctrl = Controller.new()");
            sb.appendLine();
            sb.appendLine("# メインループ");
            sb.appendLine("while (true) do");
            sb.appendLine("\t# メッセージ待ち");
            sb.appendLine("\tret = TargetBoard::wait_msg(ctrl.timer)");
            sb.appendLine("\tif !ret then");
            sb.appendLine("\t\tbreak;");
            sb.appendLine("\tend");
            sb.appendLine();
            sb.appendLine("\t# 経過時間の計算");
            sb.appendLine("\tctrl.progress ret[0]");
            sb.appendLine();
            sb.appendLine("\t# 戻り値が２つなら");
            sb.appendLine("\tif ret.length == 2 then");
            sb.appendLine("\t\t# 内部イベント");
            sb.appendLine("\t\tcase (ret[1])");
            sb.appendLine("\t\twhen 1 then");
            sb.appendLine("\t\t\tTargetBoard::restart");
            sb.appendLine("\t\twhen 2 then");
            sb.appendLine("\t\t\tctrl.ntf_inl");
            sb.appendLine("\t\tend");
            sb.appendLine("\t# 戻り値が３つなら");
            sb.appendLine("\telsif ret.length == 3 then");
            sb.appendLine("\t\t# 通信レイヤーからのメッセージ（通信端点と電文）");
            sb.appendLine("\t\tctrl.recv_msg(ret[1], ret[2])");
            sb.appendLine("\tend");
            sb.appendLine();
            sb.appendLine("\t# タイムアウトの処理があれば行う");
            sb.appendLine("\tctrl.call_timeout");
            sb.appendLine("end");

            return sb.toString();
        },
        functionNamePlaceholder: function () {
            return this.FUNCTION_NAME_PLACEHOLDER_;
        },
        reservedWords: function () {
            return this.RESERVED_WORDS_;
        },
        init: function (workspace) {
            // Create a dictionary of definitions to be printed before the code.
            Blockly.Ruby.definitions_ = {};
            // Create a dictionary mapping desired function names in definitions_
            // to actual function names (to avoid collisions with user functions).
            Blockly.Ruby.functionNames_ = new (System.Collections.Generic.Dictionary$2(String,String))();

            if (Blockly.Variables != null) {
                if (Blockly.Ruby.variableDB_ == null) {

                    Blockly.Ruby.variableDB_ = new Blockly.Names(Blockly.Ruby.reservedWords());

                    Blockly.Ruby.variableDB_.localVars = null;
                    this.variableDB_.localVarsDB = null;

                    Blockly.Ruby.variableDB_.getRubyName = $_.WebMrbc.Ruby.f1;

                    Blockly.Ruby.variableDB_.pushScope = $_.WebMrbc.Ruby.f2;

                    Blockly.Ruby.variableDB_.addLocalVariable = Bridge.fn.bind(this, $_.WebMrbc.Ruby.f3);

                    Blockly.Ruby.variableDB_.popScope = Bridge.fn.bind(this, $_.WebMrbc.Ruby.f4);
                } else {
                    Blockly.Ruby.variableDB_.reset();
                }

                var defvars = System.Array.init(0, null);
                var variables = Blockly.Variables.allVariables(workspace);
                for (var x = 0; x < variables.length; x = (x + 1) | 0) {
                    defvars.push(System.String.concat(System.String.concat("@", Blockly.Ruby.variableDB_.getName(variables[x], Blockly.Variables.NAME_TYPE)), " = nil"));
                }
                var code = defvars.join("\n");
                this.definitions_.variables = code;
            }

            this.init_smalruby(workspace);
        },
        validName: function (name) {
            return this.variableDB_.safeName_(name);
        },
        generateDefinitions: function (helpers) {
            var $t;
            var requires = System.Array.init(0, null);
            var prepares = System.Array.init(0, null);
            var definitions = System.Array.init(0, null);
            $t = Bridge.getEnumerator(Object.keys(this.definitions_));
            while ($t.moveNext()) {
                var name = $t.getCurrent();
                var def = Bridge.as(this.definitions_[name], String);
                if (def == null) {
                    continue;
                }

                if (name.match(new RegExp("^require__")) != null) {
                    requires.push(def);
                } else if (name.match(new RegExp("^prepare__")) != null) {
                    prepares.push(def);
                } else {
                    definitions.push(def);
                }
            }

            var allDefs = "";

            if (requires.length > 0) {
                allDefs = System.String.concat(allDefs, (System.String.concat(requires.join("\n"), "\n\n")));
            }

            if (helpers.length > 0) {
                allDefs = System.String.concat(allDefs, (System.String.concat(helpers.join("\n"), "\n\n")));
            }

            if (prepares.length > 0) {
                allDefs = System.String.concat(allDefs, (System.String.concat(prepares.join("\n"), "\n\n")));
            }

            if (definitions.length > 0) {
                allDefs = System.String.concat(allDefs, (System.String.concat(definitions.join("\n"), "\n\n")));
            }
            return allDefs;
        },
        finish: function (code) {
            // need some helper functions to conform to Blockly's behavior
            var helpers = System.Array.init(0, null);
            var indent = "\t";
            var allDefs = this.generateDefinitions(helpers);
            allDefs = System.String.concat(indent, allDefs.split("\n").join(System.String.concat("\n", indent)));
            return System.String.concat(System.String.concat(allDefs.replace(new RegExp("\n\n+", "g"), "\n\n"), "\n"), code);
        },
        scrubNakedValue: function (line) {
            return System.String.concat(line, "\n");
        },
        quote_: function (str) {
            // copy and modified goog.string.quote:
            // http://docs.closure-library.googlecode.com/git/namespace_goog_string.html
            var s = str.toString();
            var sb = ["\""];
            for (var i = 0; i < s.length; i = (i + 1) | 0) {
                var ch = s.charAt(i);
                var rch = { };
                if (!Blockly.Ruby.escapeChars_.tryGetValue(ch, rch)) {
                    rch.v = ch;
                }
                sb[((i + 1) | 0)] = rch.v;
            }
            sb.push("\"");
            return sb.join("");
        },
        scrub_: function (block, code) {
            if (code == null) {
                // Block has handled code generation itself.
                return "";
            }
            var commentCode = "";
            // Only collect comments for blocks that aren't inline.
            if (block.outputConnection == null || block.outputConnection.targetConnection == null) {
                // Collect comment for this block.
                var comment = block.getCommentText();
                if (!System.String.isNullOrEmpty(comment)) {
                    commentCode = System.String.concat(commentCode, (System.String.concat(this.prefixLines(comment, "# "), "\n")));
                }
                // Collect comments for all value arguments.
                // Don't collect comments for nested statements.
                for (var x = 0; x < block.inputList.length; x = (x + 1) | 0) {
                    if (block.inputList[x].type === Blockly.INPUT_VALUE) {
                        var childBlock = block.inputList[x].connection.targetBlock();
                        if (childBlock != null) {
                            comment = this.allNestedComments(childBlock);
                            if (!System.String.isNullOrEmpty(comment)) {
                                commentCode = System.String.concat(commentCode, (this.prefixLines(comment, "# ")));
                            }
                        }
                    }
                }
            }
            var nextBlock = null;
            if (block.nextConnection != null) {
                nextBlock = block.nextConnection.targetBlock();
            }
            var nextCode = this.blockToCode(nextBlock);

            return System.String.concat(System.String.concat(commentCode, code), nextCode);
        },
        colour_picker: function (block) {
            // Colour picker.
            var code = System.String.concat(System.String.concat("'", block.getFieldValue("COLOUR")), "'");
            return [code, this.ORDER_ATOMIC];
        },
        colour_random: function (block) {
            // Generate a random colour.
            var code = "'#%06x' % rand(2**24 - 1)";
            return [code, this.ORDER_FUNCTION_CALL];
        },
        colour_rgb: function (block) {
            // Compose a colour from RGB components expressed as percentages.
            var functionName = Blockly.Ruby.provideFunction_("colour_rgb", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(r, g, b)"), "  r = (2.55 * [100, [0, r].max].min).round", "  g = (2.55 * [100, [0, g].max].min).round", "  b = (2.55 * [100, [0, b].max].min).round", "  '#%02x%02x%02x' % [r, g, b]", "end"]);
            var r = Blockly.Ruby.valueToCode(block, "RED", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(r)) {
                r = "0";
            }
            var g = Blockly.Ruby.valueToCode(block, "GREEN", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(g)) {
                g = "0";
            }
            var b = Blockly.Ruby.valueToCode(block, "BLUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(b)) {
                b = "0";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), r), ", "), g), ", "), b), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        colour_blend: function (block) {
            // Blend two colours together.
            var functionName = Blockly.Ruby.provideFunction_("colour_blend", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(colour1, colour2, ratio) "), "  _, r1, g1, b1 = colour1.unpack('A1A2A2A2').map {|x| x.to_i(16)}", "  _, r2, g2, b2 = colour2.unpack('A1A2A2A2').map {|x| x.to_i(16)}", "  ratio = [1, [0, ratio].max].min", "  r = (r1 * (1 - ratio) + r2 * ratio).round", "  g = (g1 * (1 - ratio) + g2 * ratio).round", "  b = (b1 * (1 - ratio) + b2 * ratio).round", "  '#%02x%02x%02x' % [r, g, b]", "end"]);
            var colour1 = Blockly.Ruby.valueToCode(block, "COLOUR1", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(colour1)) {
                colour1 = "'#000000'";
            }
            var colour2 = Blockly.Ruby.valueToCode(block, "COLOUR2", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(colour2)) {
                colour2 = "'#000000'";
            }
            var ratio = Blockly.Ruby.valueToCode(block, "RATIO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(ratio)) {
                ratio = "0";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), colour1), ", "), colour2), ", "), ratio), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        lists_create_empty: function (block) {
            // Create an empty list.
            return ["[]", this.ORDER_ATOMIC];
        },
        lists_create_with: function (block) {
            // Create a list with any number of elements of any type.
            var code = System.Array.init(block.itemCount_, null);
            for (var n = 0; n < block.itemCount_; n = (n + 1) | 0) {
                code[n] = Blockly.Ruby.valueToCode(block, System.String.concat("ADD", n), Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(code[n])) {
                    code[n] = "None";
                }
            }
            var _code = System.String.concat(System.String.concat("[", code.join(", ")), "]");
            return [_code, this.ORDER_ATOMIC];
        },
        lists_repeat: function (block) {
            // Create a list with one element repeated.
            var argument0 = Blockly.Ruby.valueToCode(block, "ITEM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "None";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = System.String.concat(System.String.concat(System.String.concat("[", argument0), "] * "), argument1);
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        lists_length: function (block) {
            // List length.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            return [System.String.concat(argument0, ".length"), this.ORDER_FUNCTION_CALL];
        },
        lists_isEmpty: function (block) {
            // Is the list empty?
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            var code = System.String.concat(argument0, ".empty?");
            return [code, this.ORDER_LOGICAL_NOT];
        },
        lists_indexOf: function (block) {
            // Find an item in the list.
            var search = Blockly.Ruby.valueToCode(block, "FIND", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(search)) {
                search = "[]";
            }
            var list = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "''";
            }
            var finder = Bridge.referenceEquals(block.getFieldValue("END"), "FIRST") ? ".find_first" : ".find_last";
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(list, finder), "("), search), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        lists_getIndex: function (block) {
            // Get element at index.
            var mode = block.getFieldValue("MODE");
            if (System.String.isNullOrEmpty(mode)) {
                mode = "GET";
            }
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_UNARY_SIGN);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var list = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }

            if (Bridge.referenceEquals(where, "FIRST")) {
                if (Bridge.referenceEquals(mode, "GET")) {
                    var code = System.String.concat(list, ".first");
                    return [code, this.ORDER_FUNCTION_CALL];
                } else {
                    var code1 = System.String.concat(list, ".shift");
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code1, this.ORDER_FUNCTION_CALL];
                    } else if (Bridge.referenceEquals(mode, "REMOVE")) {
                        return System.String.concat(code1, "\n");
                    }
                }
            } else if (Bridge.referenceEquals(where, "LAST")) {
                if (Bridge.referenceEquals(mode, "GET")) {
                    var code2 = System.String.concat(list, ".last");
                    return [code2, this.ORDER_MEMBER];
                } else {
                    var code3 = System.String.concat(list, ".pop");
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code3, this.ORDER_FUNCTION_CALL];
                    } else if (Bridge.referenceEquals(mode, "REMOVE")) {
                        return System.String.concat(code3, "\n");
                    }
                }
            } else if (Bridge.referenceEquals(where, "FROM_START")) {
                // Blockly uses one-based indicies.
                if (Blockly.isNumber(at)) {
                    // If the index is a naked number, decrement it right now.
                    at = (((parseInt(at, 10) - 1) | 0)).toString();
                } else {
                    // If the index is dynamic, decrement it in code.
                    at = System.String.concat(System.String.concat("(", at), " - 1).to_i");
                }
                if (Bridge.referenceEquals(mode, "GET")) {
                    var code4 = System.String.concat(System.String.concat(System.String.concat(list, "["), at), "]");
                    return [code4, this.ORDER_MEMBER];
                } else {
                    var code5 = System.String.concat(System.String.concat(System.String.concat(list, ".delete_at("), at), ")");
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code5, this.ORDER_FUNCTION_CALL];
                    } else if (Bridge.referenceEquals(mode, "REMOVE")) {
                        return System.String.concat(code5, "\n");
                    }
                }
            } else if (Bridge.referenceEquals(where, "FROM_END")) {
                if (Bridge.referenceEquals(mode, "GET")) {
                    var code6 = System.String.concat(System.String.concat(System.String.concat(list, "[-"), at), "]");
                    return [code6, this.ORDER_MEMBER];
                } else {
                    var code7 = System.String.concat(System.String.concat(System.String.concat(list, ".delete_at(-"), at), ")");
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code7, this.ORDER_FUNCTION_CALL];
                    } else if (Bridge.referenceEquals(mode, "REMOVE")) {
                        return System.String.concat(code7, "\n");
                    }
                }
            } else if (Bridge.referenceEquals(where, "RANDOM")) {
                if (Bridge.referenceEquals(mode, "GET")) {
                    var functionName = Blockly.Ruby.provideFunction_("lists_random_item", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(myList)"), "  myList[rand(myList.size)]", "end"]);
                    var code8 = System.String.concat(System.String.concat(System.String.concat(functionName, "("), list), ")");
                    return [code8, this.ORDER_FUNCTION_CALL];
                } else {
                    var functionName1 = Blockly.Ruby.provideFunction_("lists_remove_random_item", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(myList)"), "  myList.delete_at(rand(myList.size))", "end"]);
                    var code9 = System.String.concat(System.String.concat(System.String.concat(functionName1, "("), list), ")");
                    if (Bridge.referenceEquals(mode, "GET_REMOVE")) {
                        return [code9, this.ORDER_FUNCTION_CALL];
                    } else if (Bridge.referenceEquals(mode, "REMOVE")) {
                        return System.String.concat(code9, "\n");
                    }
                }
            }
            throw new System.Exception("Unhandled combination (lists_getIndex).");
        },
        lists_setIndex: function (block) {
            // Set element at index.
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var mode = block.getFieldValue("MODE");
            if (System.String.isNullOrEmpty(mode)) {
                mode = "GET";
            }
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var value = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(value)) {
                value = "None";
            }

            if (Bridge.referenceEquals(where, "FIRST")) {
                if (Bridge.referenceEquals(mode, "SET")) {
                    return System.String.concat(System.String.concat(System.String.concat(list, "[0] = "), value), "\n");
                } else if (Bridge.referenceEquals(mode, "INSERT")) {
                    return System.String.concat(System.String.concat(System.String.concat(list, ".unshift("), value), ")\n");
                }
            } else if (Bridge.referenceEquals(where, "LAST")) {
                if (Bridge.referenceEquals(mode, "SET")) {
                    return System.String.concat(System.String.concat(System.String.concat(list, "[-1] = "), value), "\n");
                } else if (Bridge.referenceEquals(mode, "INSERT")) {
                    return System.String.concat(System.String.concat(System.String.concat(list, ".push("), value), ")\n");
                }
            } else if (Bridge.referenceEquals(where, "FROM_START")) {
                // Blockly uses one-based indicies.
                if (Blockly.isNumber(at)) {
                    // If the index is a naked number, decrement it right now.
                    at = (((parseInt(at, 10) - 1) | 0)).toString();
                } else {
                    // If the index is dynamic, decrement it in code.
                    at = System.String.concat(System.String.concat("(", at), " - 1).to_i");
                }
                if (Bridge.referenceEquals(mode, "SET")) {
                    return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(list, "["), at), "] = "), value), "\n");
                } else if (Bridge.referenceEquals(mode, "INSERT")) {
                    return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(list, ".insert("), at), ", "), value), ")\n");
                }
            } else if (Bridge.referenceEquals(where, "FROM_END")) {
                if (Bridge.referenceEquals(mode, "SET")) {

                    // Blockly uses one-based indicies.
                    if (Blockly.isNumber(at)) {
                        // If the index is a naked number, decrement it right now.
                        at = parseInt(at, 10).toString();
                    } else {
                        // If the index is dynamic, decrement it in code.
                        at = System.String.concat(System.String.concat("(", at), ").to_i");
                    }

                    return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(list, "[-"), at), "] = "), value), "\n");
                } else if (Bridge.referenceEquals(mode, "INSERT")) {

                    // Blockly uses one-based indicies.
                    if (Blockly.isNumber(at)) {
                        // If the index is a naked number, decrement it right now.
                        at = (((parseInt(at, 10) + 1) | 0)).toString();
                    } else {
                        // If the index is dynamic, decrement it in code.
                        at = System.String.concat(System.String.concat("(", at), " + 1).to_i");
                    }

                    return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(list, ".insert(-"), at), ", "), value), ")\n");
                }
            } else if (Bridge.referenceEquals(where, "RANDOM")) {
                if (Bridge.referenceEquals(mode, "SET")) {
                    var functionName = Blockly.Ruby.provideFunction_("lists_set_random_item", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(myList, value)"), System.String.concat("  myList[rand(myList.size)] = ", value), "end"]);
                    var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), list), ", "), value), ")\n");
                    return code;
                } else if (Bridge.referenceEquals(mode, "INSERT")) {
                    var functionName1 = Blockly.Ruby.provideFunction_("lists_insert_random_item", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(myList, value)"), System.String.concat(System.String.concat("  myList.insert(rand(myList.size), ", value), ")"), "end"]);
                    var code1 = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName1, "("), list), ", "), value), ")\n");
                    return code1;
                }
            }
            throw new System.Exception("Unhandled combination (lists_setIndex).");
        },
        lists_getSublist: function (block) {
            var functionName = Blockly.Ruby.provideFunction_("lists_sublist", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(myList, range)"), "  myList[range] || []", "end"]);
            // Get sublist.
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var where1 = block.getFieldValue("WHERE1");
            var where2 = block.getFieldValue("WHERE2");
            var at1 = Blockly.Ruby.valueToCode(block, "AT1", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(at1)) {
                at1 = "1";
            }
            var at2 = Blockly.Ruby.valueToCode(block, "AT2", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(at2)) {
                at2 = "1";
            }
            if (Bridge.referenceEquals(where1, "FIRST") || (Bridge.referenceEquals(where1, "FROM_START") && Bridge.referenceEquals(at1, "1"))) {
                at1 = "0";
            } else if (Bridge.referenceEquals(where1, "FROM_START")) {
                // Blockly uses one-based indicies.
                if (Blockly.isNumber(at1)) {
                    at1 = (((parseInt(at1, 10) - 1) | 0)).toString();
                } else {
                    at1 = System.String.concat(at1, ".to_i - 1)");
                }
            } else if (Bridge.referenceEquals(where1, "FROM_END")) {
                if (Blockly.isNumber(at1)) {
                    at1 = (((-parseInt(at1, 10)) | 0)).toString();
                } else {
                    at1 = System.String.concat(System.String.concat("-", at1), ".to_i");
                }
            }
            if (Bridge.referenceEquals(where2, "LAST") || (Bridge.referenceEquals(where2, "FROM_END") && Bridge.referenceEquals(at2, "1"))) {
                at2 = "-1";
            } else if (Bridge.referenceEquals(where2, "FROM_START")) {
                if (Blockly.isNumber(at2)) {
                    at2 = (((parseInt(at2, 10) - 1) | 0)).toString();
                } else {
                    at2 = System.String.concat(at2, ".to_i - 1");
                }
            } else if (Bridge.referenceEquals(where2, "FROM_END")) {
                if (Blockly.isNumber(at2)) {
                    at2 = (((-parseInt(at2, 10)) | 0)).toString();
                } else {
                    at2 = System.String.concat(System.String.concat("-", at2), ".to_i");
                }
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), list), ", "), at1), ".."), at2), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        controls_if: function (block) {
            // If/elseif/else condition.
            var n = 0;
            var argument = Blockly.Ruby.valueToCode(block, System.String.concat("IF", n), Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "false";
            }
            var branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            var code = System.String.concat(System.String.concat(System.String.concat("if ", argument), "\n"), branch);
            for (n = 1; n <= block.elseifCount_; n = (n + 1) | 0) {
                argument = Blockly.Ruby.valueToCode(block, System.String.concat("IF", n), Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument)) {
                    argument = "false";
                }
                branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat("elsif ", argument), "\n"), branch)));
            }
            if (block.elseCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "ELSE");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat("else\n", branch)));
            }
            code = System.String.concat(code, "end\n");
            return code;
        },
        logic_compare: function (block) {
            // Comparison operator.
            var OPERATORS = new (System.Collections.Generic.Dictionary$2(String,String))();
            OPERATORS.add("EQ", "==");
            OPERATORS.add("NEQ", "!=");
            OPERATORS.add("LT", "<");
            OPERATORS.add("LTE", "<=");
            OPERATORS.add("GT", ">");
            OPERATORS.add("GTE", ">=");
            var operator = OPERATORS.get(block.getFieldValue("OP"));
            var order = Blockly.Ruby.ORDER_RELATIONAL;
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(argument0, String.fromCharCode(32)), operator), String.fromCharCode(32)), argument1);
            return [code, order];
        },
        logic_operation: function (block) {
            // Operations 'and', 'or'.
            var operator = (Bridge.referenceEquals(block.getFieldValue("OP"), "AND")) ? "&&" : "||";
            var order = (Bridge.referenceEquals(operator, "&&")) ? Blockly.Ruby.ORDER_LOGICAL_AND : Blockly.Ruby.ORDER_LOGICAL_OR;
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument0) && System.String.isNullOrEmpty(argument1)) {
                // If there are no arguments, then the return value is false.
                argument0 = "false";
                argument1 = "false";
            } else {
                // Single missing arguments have no effect on the return value.
                var defaultArgument = (Bridge.referenceEquals(operator, "&&")) ? "true" : "false";
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = defaultArgument;
                }
                if (System.String.isNullOrEmpty(argument1)) {
                    argument1 = defaultArgument;
                }
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(argument0, String.fromCharCode(32)), operator), String.fromCharCode(32)), argument1);
            return [code, order];
        },
        logic_negate: function (block) {
            // Negation.
            var argument0 = Blockly.Ruby.valueToCode(block, "BOOL", Blockly.Ruby.ORDER_LOGICAL_NOT);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "true";
            }
            var code = System.String.concat("! ", argument0);
            return [code, this.ORDER_LOGICAL_NOT];
        },
        logic_boolean: function (block) {
            // Boolean values true and false.
            var code = (Bridge.referenceEquals(block.getFieldValue("BOOL"), "TRUE")) ? "true" : "false";
            return [code, this.ORDER_ATOMIC];
        },
        logic_null: function (block) {
            // Null data type.
            return ["nil", this.ORDER_ATOMIC];
        },
        logic_ternary: function (block) {
            // Ternary operator.
            var value_if = Blockly.Ruby.valueToCode(block, "IF", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_if)) {
                value_if = "false";
            }
            var value_then = Blockly.Ruby.valueToCode(block, "THEN", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_then)) {
                value_then = "nil";
            }
            var value_else = Blockly.Ruby.valueToCode(block, "ELSE", Blockly.Ruby.ORDER_CONDITIONAL);
            if (System.String.isNullOrEmpty(value_else)) {
                value_else = "nil";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(value_if, " ? "), value_then), " : "), value_else);
            return [code, this.ORDER_CONDITIONAL];
        },
        controls_repeat: function (block) {
            // Repeat n times (internal number).
            var repeats = parseInt(block.getFieldValue("TIMES"), 10);
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat("'", block.id), "'")), branch);
            }
            var code = System.String.concat(System.String.concat(System.String.concat(repeats, ".times do\n"), branch), "end\n");
            return code;
        },
        controls_repeat_ext: function (block) {
            // Repeat n times (external number).
            var repeats = Blockly.Ruby.valueToCode(block, "TIMES", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(repeats)) {
                repeats = "0";
            }
            if (Blockly.isNumber(repeats)) {
                repeats = parseInt(repeats, 10).toString();
            } else {
                repeats = System.String.concat(repeats, ".to_i");
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat("'", block.id), "'")), branch);
            }
            var code = System.String.concat(System.String.concat(System.String.concat(repeats, ".times do\n"), branch), "end\n");
            return code;
        },
        controls_whileUntil: function (block) {
            // Do while/until loop.
            var until = Bridge.referenceEquals(block.getFieldValue("MODE"), "UNTIL");
            var argument0 = Blockly.Ruby.valueToCode(block, "BOOL", until ? Blockly.Ruby.ORDER_LOGICAL_NOT : Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "false";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat("\"", block.id), "\"")), branch);
            }
            var mode = until ? "until " : "while ";
            return System.String.concat(System.String.concat(System.String.concat(System.String.concat(mode, argument0), " do\n"), branch), "end\n");
        },
        controls_for: function (block) {
            // For loop.
            Blockly.Ruby.variableDB_.pushScope();

            var loopVar = Blockly.Ruby.variableDB_.addLocalVariable(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var fromVal = Blockly.Ruby.valueToCode(block, "FROM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(fromVal)) {
                fromVal = "0";
            }
            var toVal = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(toVal)) {
                toVal = "0";
            }
            var increment = Blockly.Ruby.valueToCode(block, "BY", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(increment)) {
                increment = null;
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat(String.fromCharCode(34), block.id), String.fromCharCode(34))), branch);
            }

            // Helper function
            var forLoop = $_.WebMrbc.Ruby.f5;

            var generateForLoop = function (_fromVal, _toVal, _increment) {
                return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(forLoop(), " from: ("), _fromVal), "), "), "to: ("), _toVal), "), "), "by: ("), _increment), ")");
            };

            var code = "";
            var _forLoop;

            if (Blockly.isNumber(fromVal) && Blockly.isNumber(toVal) && (increment == null || Blockly.isNumber(increment))) {

                if (increment == null) {
                    increment = "1";
                }

                // All parameters are simple numbers.
                fromVal = System.Double.format(parseFloat(fromVal), 'G');
                toVal = System.Double.format(parseFloat(toVal), 'G');
                increment = System.Double.format(parseFloat(increment), 'G');

                _forLoop = generateForLoop(fromVal, toVal, increment);
            } else {
                if (increment == null) {
                    increment = "1";
                } else {
                    increment = System.String.concat(System.String.concat("(", increment), ").to_f");
                }

                _forLoop = generateForLoop(System.String.concat(fromVal, ".to_f"), System.String.concat(toVal, ".to_f"), increment);
            }

            Blockly.Ruby.variableDB_.popScope();

            code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(_forLoop, " do |"), loopVar), "|\n"), branch), "end\n")));

            return code;
        },
        controls_forEach: function (block) {
            // For each loop.
            Blockly.Ruby.variableDB_.pushScope();

            var loopVar = Blockly.Ruby.variableDB_.addLocalVariable(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var argument0 = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_RELATIONAL);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "[]";
            }
            var branch = Blockly.Ruby.statementToCode(block, "DO");
            if (System.String.isNullOrEmpty(branch)) {
                branch = "end\n";
            }
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat("\"", block.id), "\"")), branch);
            }

            Blockly.Ruby.variableDB_.popScope();

            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(argument0, ".each do |"), loopVar), "|\n"), branch), "end\n");
            return code;
        },
        controls_flow_statements: function (block) {
            // Flow statements: continue, break.
            switch (block.getFieldValue("FLOW")) {
                case "BREAK": 
                    return "break\n";
                case "CONTINUE": 
                    return "next\n";
            }
            throw new System.Exception("Unknown flow statement.");
        },
        math_number: function (block) {
            // Numeric value.
            var code = parseFloat(block.getFieldValue("NUM"));
            var order = code < 0 ? Blockly.Ruby.ORDER_UNARY_SIGN : Blockly.Ruby.ORDER_ATOMIC;
            return [code, order];
        },
        math_arithmetic: function (block) {
            // Basic arithmetic operators, and power.
            var OPERATORS = new (System.Collections.Generic.Dictionary$2(String,Array))();
            OPERATORS.add("ADD", [" + ", Blockly.Ruby.ORDER_ADDITIVE]);
            OPERATORS.add("MINUS", [" - ", Blockly.Ruby.ORDER_ADDITIVE]);
            OPERATORS.add("MULTIPLY", [" * ", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            OPERATORS.add("DIVIDE", [" / ", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            OPERATORS.add("POWER", [" ** ", Blockly.Ruby.ORDER_EXPONENTIATION]);
            var tuple = OPERATORS.get(block.getFieldValue("OP"));
            var operator = tuple[0];
            var order = System.Nullable.getValue(Bridge.cast(tuple[1], System.Int32));
            var argument0 = Blockly.Ruby.valueToCode(block, "A", order);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "B", order);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = System.String.concat(System.String.concat(argument0, operator), argument1);
            return [code, order];
        },
        math_single: function (block) {
            // Math operators with single operand.
            var operator = block.getFieldValue("OP");
            var code = null;
            var arg;
            if (Bridge.referenceEquals(operator, "NEG")) {
                // Negation is a special case given its different operator precedence.
                code = Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_UNARY_SIGN);
                if (System.String.isNullOrEmpty(code)) {
                    code = "0";
                }
                return [System.String.concat("-", code), this.ORDER_UNARY_SIGN];
            }
            if (Bridge.referenceEquals(operator, "SIN") || Bridge.referenceEquals(operator, "COS") || Bridge.referenceEquals(operator, "TAN")) {
                arg = System.String.concat(System.String.concat("(", Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_MULTIPLICATIVE)), ")");
                if (System.String.isNullOrEmpty(arg)) {
                    arg = "0";
                }
            } else {
                arg = System.String.concat(System.String.concat("(", Blockly.Ruby.valueToCode(block, "NUM", Blockly.Ruby.ORDER_NONE)), ")");
                if (System.String.isNullOrEmpty(arg)) {
                    arg = "0";
                }
            }
            // First, handle cases which generate values that don't need parentheses
            // wrapping the code.
            switch (operator) {
                case "ABS": 
                    code = System.String.concat(arg, ".abs");
                    break;
                case "ROOT": 
                    code = System.String.concat(System.String.concat("Math.sqrt(", arg), ")");
                    break;
                case "LN": 
                    code = System.String.concat(System.String.concat("Math.log(", arg), ")");
                    break;
                case "LOG10": 
                    code = System.String.concat(System.String.concat("Math.log10(", arg), ")");
                    break;
                case "EXP": 
                    code = System.String.concat(System.String.concat("Math.exp(", arg), ")");
                    break;
                case "POW10": 
                    code = System.String.concat(System.String.concat("(10 ** ", arg), ")");
                    break;
                case "ROUND": 
                    code = System.String.concat(arg, ".round");
                    break;
                case "ROUNDUP": 
                    code = System.String.concat(arg, ".ceil");
                    break;
                case "ROUNDDOWN": 
                    code = System.String.concat(arg, ".floor");
                    break;
                case "SIN": 
                    code = System.String.concat(System.String.concat("Math.sin(", arg), " / 180.0 * Math::PI)");
                    break;
                case "COS": 
                    code = System.String.concat(System.String.concat("Math.cos(", arg), " / 180.0 * Math::PI)");
                    break;
                case "TAN": 
                    code = System.String.concat(System.String.concat("Math.tan(", arg), " / 180.0 * Math::PI)");
                    break;
            }
            if (!System.String.isNullOrEmpty(code)) {
                return [code, this.ORDER_FUNCTION_CALL];
            }
            // Second, handle cases which generate values that may need parentheses
            // wrapping the code.
            switch (operator) {
                case "ASIN": 
                    code = System.String.concat(System.String.concat("Math.asin(", arg), ") / Math::PI * 180");
                    break;
                case "ACOS": 
                    code = System.String.concat(System.String.concat("Math.acos(", arg), ") / Math::PI * 180");
                    break;
                case "ATAN": 
                    code = System.String.concat(System.String.concat("Math.atan(", arg), ") / Math::PI * 180");
                    break;
                default: 
                    throw new System.Exception(System.String.concat("Unknown math operator: ", operator));
            }
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        math_constant: function (block) {
            // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
            var CONSTANTS = new (System.Collections.Generic.Dictionary$2(String,Array))();
            CONSTANTS.add("PI", ["Math::PI", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("E", ["Math::E", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("GOLDEN_RATIO", ["(1 + Math.sqrt(5)) / 2", Blockly.Ruby.ORDER_MULTIPLICATIVE]);
            CONSTANTS.add("SQRT2", ["Math.sqrt(2)", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("SQRT1_2", ["Math.sqrt(1.0 / 2)", Blockly.Ruby.ORDER_MEMBER]);
            CONSTANTS.add("INFINITY", ["1/0.0", Blockly.Ruby.ORDER_ATOMIC]);
            var constant = block.getFieldValue("CONSTANT");
            return CONSTANTS.get(constant);
        },
        math_number_property: function (block) {
            // Check if a number is even, odd, prime, whole, positive, or negative
            // or if it is divisible by certain number. Returns true or false.
            var number_to_check = Blockly.Ruby.valueToCode(block, "NUMBER_TO_CHECK", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(number_to_check)) {
                number_to_check = "0";
            }
            var dropdown_property = block.getFieldValue("PROPERTY");
            var code = null;
            if (Bridge.referenceEquals(dropdown_property, "PRIME")) {
                var functionName = Blockly.Ruby.provideFunction_("is_prime", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), " n"), "  return false if n < 0", "  (2..Math.sqrt(n)).each { |i| return false if n % i == 0}", "  true", "end"]);
                code = System.String.concat(System.String.concat(System.String.concat(functionName, "("), number_to_check), ")");
                return [code, this.ORDER_FUNCTION_CALL];
            }
            switch (dropdown_property) {
                case "EVEN": 
                    code = System.String.concat(number_to_check, ".even?");
                    break;
                case "ODD": 
                    code = System.String.concat(number_to_check, ".odd?");
                    break;
                case "WHOLE": 
                    code = System.String.concat(number_to_check, " % 1 == 0");
                    break;
                case "POSITIVE": 
                    code = System.String.concat(number_to_check, " > 0");
                    break;
                case "NEGATIVE": 
                    code = System.String.concat(number_to_check, " < 0");
                    break;
                case "DIVISIBLE_BY": 
                    var divisor = Blockly.Ruby.valueToCode(block, "DIVISOR", Blockly.Ruby.ORDER_MULTIPLICATIVE);
                    // If "divisor" is some code that evals to 0, Ruby will raise an error.
                    if (System.String.isNullOrEmpty(divisor) || Bridge.referenceEquals(divisor, "0")) {
                        return ["false", this.ORDER_ATOMIC];
                    }
                    code = System.String.concat(System.String.concat(System.String.concat(number_to_check, " % "), divisor), " == 0");
                    break;
            }
            return [code, this.ORDER_RELATIONAL];
        },
        math_change: function (block) {
            // Add to a variable in place.
            var argument0 = Blockly.Ruby.valueToCode(block, "DELTA", Blockly.Ruby.ORDER_ADDITIVE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return System.String.concat(System.String.concat(System.String.concat(varName, " += "), argument0), "\n");
        },
        math_round: function (block) {
            return this.math_single(block);
        },
        math_trig: function (block) {
            return this.math_single(block);
        },
        math_on_list: function (block) {
            // Math functions for lists.
            var func = block.getFieldValue("OP");
            var list = Blockly.Ruby.valueToCode(block, "LIST", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(list)) {
                list = "[]";
            }
            var code;
            switch (func) {
                case "SUM": 
                    code = System.String.concat(list, ".sum");
                    break;
                case "MIN": 
                    code = System.String.concat(list, ".numbers.min");
                    break;
                case "MAX": 
                    code = System.String.concat(list, ".numbers.max");
                    break;
                case "AVERAGE": 
                    code = System.String.concat(list, ".average");
                    break;
                case "MEDIAN": 
                    code = System.String.concat(list, ".median");
                    break;
                case "MODE": 
                    // As a list of numbers can contain more than one mode,
                    // the returned result is provided as an array.
                    // Mode of [3, "x", "x", 1, 1, 2, "3"] -> ["x", 1].
                    var functionName = Blockly.Ruby.provideFunction_("math_modes", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(some_list)"), "  groups = some_list.group_by{|v| v}", "  ", "  groups = groups.sort {|a,b| b[1].size <=> a[1].size}", "  ", "  max_size = groups[0][1].size", "  ", "  modes = []", "  ", "  groups.each do |group|", "    ", "    break if group[1].size != max_size", "    ", "    modes << group[0]", "    ", "  end", "  ", "  modes", "", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(functionName, "("), list), ")");
                    break;
                case "STD_DEV": 
                    code = System.String.concat(list, ".standard_deviation");
                    break;
                case "RANDOM": 
                    code = System.String.concat(System.String.concat(System.String.concat(list, "[rand("), list), ".size)]");
                    break;
                default: 
                    throw new System.Exception(System.String.concat("Unknown operator: ", func));
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_modulo: function (block) {
            // Remainder computation.
            var argument0 = Blockly.Ruby.valueToCode(block, "DIVIDEND", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "DIVISOR", Blockly.Ruby.ORDER_MULTIPLICATIVE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = System.String.concat(System.String.concat(argument0, " % "), argument1);
            return [code, this.ORDER_MULTIPLICATIVE];
        },
        math_constrain: function (block) {
            // Constrain a number between two limits.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "LOW", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var argument2 = Blockly.Ruby.valueToCode(block, "HIGH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument2)) {
                argument2 = "float('inf')";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("[[", argument0), ", "), argument1), "].max, "), argument2), "].min");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_random_int: function (block) {
            // Random integer between [X] and [Y].
            var argument0 = Blockly.Ruby.valueToCode(block, "FROM", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var argument1 = Blockly.Ruby.valueToCode(block, "TO", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument1)) {
                argument1 = "0";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat("rand(", argument0), ".."), argument1), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        math_random_float: function (block) {
            // Random fraction between 0 and 1.
            return ["rand", this.ORDER_FUNCTION_CALL];
        },
        procedures_defreturn: function (block) {
            Blockly.Ruby.variableDB_.pushScope();

            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.variableDB_.addLocalVariable(block.arguments_[x], Blockly.Variables.NAME_TYPE);
            }
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var branch = Blockly.Ruby.statementToCode(block, "STACK");
            if (Blockly.Ruby.INFINITE_LOOP_TRAP != null) {
                branch = System.String.concat(Blockly.Ruby.INFINITE_LOOP_TRAP.replace(new RegExp("%1", "g"), System.String.concat(System.String.concat("\"", block.id), "\"")), branch);
            }
            var returnValue = Blockly.Ruby.valueToCode(block, "RETURN", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(returnValue)) {
                returnValue = System.String.concat(System.String.concat("\n  return ", returnValue), "\n");
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("def ", funcName), "("), args.join(", ")), ")\n"), branch), returnValue), "end");
            code = Blockly.Ruby.scrub_(block, code);
            Blockly.Ruby.definitions_[funcName] = code;

            Blockly.Ruby.variableDB_.popScope();

            return null;
        },
        procedures_defnoreturn: function (block) {
            return Blockly.Ruby.procedures_defreturn(block);
        },
        procedures_callreturn: function (block) {
            // Call a procedure with a return value.
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.valueToCode(block, System.String.concat("ARG", x), Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(args[x])) {
                    args[x] = "None";
                }
            }

            var code = System.String.concat(System.String.concat(System.String.concat(funcName, "("), args.join(", ")), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        procedures_callnoreturn: function (block) {
            // Call a procedure with no return value.
            var funcName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
            var args = System.Array.init(0, null);
            for (var x = 0; x < block.arguments_.length; x = (x + 1) | 0) {
                args[x] = Blockly.Ruby.valueToCode(block, System.String.concat("ARG", x), Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(args[x])) {
                    args[x] = "None";
                }
            }
            var code = System.String.concat(System.String.concat(System.String.concat(funcName, "("), args.join(", ")), ")\n");
            return code;
        },
        procedures_ifreturn: function (block) {
            // Conditionally return value from a procedure.
            var condition = Blockly.Ruby.valueToCode(block, "CONDITION", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(condition)) {
                condition = "False";
            }
            var code = System.String.concat(System.String.concat("if ", condition), "\n");
            if (block.hasReturnValue_) {
                var value = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(value)) {
                    value = "None";
                }
                code = System.String.concat(code, (System.String.concat(System.String.concat("\n  return ", value), "\n")));
            } else {
                code = System.String.concat(code, "\n  return\n");
            }
            code = System.String.concat(code, "end\n");

            return code;
        },
        text: function (block) {
            // Text value.
            var code = Blockly.Ruby.quote_(block.getFieldValue("TEXT"));
            return [code, this.ORDER_ATOMIC];
        },
        text_join: function (block) {
            // Create a string made up of any number of elements of any type.
            var code;
            if (block.itemCount_ === 0) {
                return ["''", this.ORDER_ATOMIC];
            } else if (block.itemCount_ === 1) {
                var argument0 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = "''";
                }
                code = System.String.concat(argument0, ".to_s");
                return [code, this.ORDER_FUNCTION_CALL];
            } else if (block.itemCount_ === 2) {
                var argument01 = Blockly.Ruby.valueToCode(block, "ADD0", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument01)) {
                    argument01 = "''";
                }
                var argument1 = Blockly.Ruby.valueToCode(block, "ADD1", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument1)) {
                    argument1 = "''";
                }
                code = System.String.concat(System.String.concat(System.String.concat(argument01, ".to_s + "), argument1), ".to_s");
                return [code, this.ORDER_UNARY_SIGN];
            } else {
                var codes = System.Array.init(0, null);
                for (var n = 0; n < block.itemCount_; n = (n + 1) | 0) {
                    var temp = Blockly.Ruby.valueToCode(block, System.String.concat("ADD", n), Blockly.Ruby.ORDER_NONE);
                    if (System.String.isNullOrEmpty(temp)) {
                        temp = "''";
                    }
                    codes[n] = System.String.concat(temp, ".to_s");
                }
                code = codes.join(" + ");
                return [code, this.ORDER_FUNCTION_CALL];
            }
        },
        text_append: function (block) {
            // Append to a variable in place.
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(varName, " = "), varName), ".to_s + ("), argument0), ").to_s\n");
        },
        text_length: function (block) {
            // String length.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return [System.String.concat(argument0, ".size"), this.ORDER_FUNCTION_CALL];
        },
        text_isEmpty: function (block) {
            // Is the string null?
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            var code = System.String.concat(argument0, ".empty?");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        text_indexOf: function (block) {
            // Search the text for a substring.
            // Should we allow for non-case sensitive???
            var finder = Bridge.referenceEquals(block.getFieldValue("END"), "FIRST") ? ".find_first" : ".find_last";
            var search = Blockly.Ruby.valueToCode(block, "FIND", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(search)) {
                search = "''";
            }
            var text = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(text, finder), "("), search), ")");
            return [code, this.ORDER_FUNCTION_CALL];
        },
        text_charAt: function (block) {
            // Get letter at index.
            // Note: Until January 2013 this block did not have the WHERE input.
            var where = block.getFieldValue("WHERE");
            if (System.String.isNullOrEmpty(where)) {
                where = "FROM_START";
            }
            var at = Blockly.Ruby.valueToCode(block, "AT", Blockly.Ruby.ORDER_UNARY_SIGN);
            if (System.String.isNullOrEmpty(at)) {
                at = "1";
            }
            var text = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }

            // Blockly uses one-based indicies.
            if (Blockly.isNumber(at)) {
                // If the index is a naked number, decrement it right now.
                at = (((parseInt(at, 10) - 1) | 0)).toString();
            } else {
                // If the index is dynamic, decrement it in code.
                at = System.String.concat(at, ".to_i - 1");
            }

            var code, functionName;
            switch (where) {
                case "FIRST": 
                    code = System.String.concat(text, "[0]");
                    return [code, this.ORDER_MEMBER];
                case "LAST": 
                    code = System.String.concat(text, "[-1]");
                    return [code, this.ORDER_MEMBER];
                case "FROM_START": 
                    functionName = Blockly.Ruby.provideFunction_("text_get_from_start", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), " (text, index)"), "  return \"\" if index < 0", "  text[index] || \"\"", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), text), ", "), at), ")");
                    return [code, this.ORDER_FUNCTION_CALL];
                case "FROM_END": 
                    functionName = Blockly.Ruby.provideFunction_("text_get_from_end", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), " (text, index)"), "  return \"\" if index < 0", "  text[-index-1] || \"\"'", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(functionName, "("), text), ", "), at), ")");
                    return [code, this.ORDER_FUNCTION_CALL];
                case "RANDOM": 
                    functionName = Blockly.Ruby.provideFunction_("text_random_letter", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), " (text)"), "  text[rand(text.size)]", "end"]);
                    code = System.String.concat(System.String.concat(System.String.concat(functionName, "("), text), ")");
                    return [code, this.ORDER_FUNCTION_CALL];
            }
            throw new System.Exception("Unhandled option (text_charAt).");
        },
        text_getSubstring: function (block) {
            // Get substring.
            var text = Blockly.Ruby.valueToCode(block, "STRING", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(text)) {
                text = "''";
            }
            var where1 = block.getFieldValue("WHERE1");
            var where2 = block.getFieldValue("WHERE2");
            var at1 = Blockly.Ruby.valueToCode(block, "AT1", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at1)) {
                at1 = "1";
            }
            var at2 = Blockly.Ruby.valueToCode(block, "AT2", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(at2)) {
                at2 = "1";
            }
            if (Bridge.referenceEquals(where1, "FIRST") || (Bridge.referenceEquals(where1, "FROM_START") && Bridge.referenceEquals(at1, "1"))) {
                at1 = "0";
            } else if (Bridge.referenceEquals(where1, "FROM_START")) {
                // Blockly uses one-based indicies.
                if (Blockly.isNumber(at1)) {
                    // If the index is a naked number, decrement it right now.
                    at1 = (((parseInt(at1, 10) - 1) | 0)).toString();
                } else {
                    // If the index is dynamic, decrement it in code.
                    at1 = System.String.concat(at1, ".to_i - 1");
                }
            } else if (Bridge.referenceEquals(where1, "FROM_END")) {
                if (Blockly.isNumber(at1)) {
                    at1 = (((-parseInt(at1, 10)) | 0)).toString();
                } else {
                    at1 = System.String.concat(System.String.concat("-", at1), ".to_i");
                }
            }
            if (Bridge.referenceEquals(where2, "LAST") || (Bridge.referenceEquals(where2, "FROM_END") && Bridge.referenceEquals(at2, "1"))) {
                at2 = "-1";
            } else if (Bridge.referenceEquals(where2, "FROM_START")) {
                if (Blockly.isNumber(at2)) {
                    at2 = (((parseInt(at2, 10) - 1) | 0)).toString();
                } else {
                    at2 = System.String.concat(at2, ".to_i - 1");
                }
            } else if (Bridge.referenceEquals(where2, "FROM_END")) {
                if (Blockly.isNumber(at2)) {
                    at2 = (((-parseInt(at2, 10)) | 0)).toString();
                } else {
                    at2 = System.String.concat(at2, ".to_i");
                }
            }
            var code = System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat(text, "["), at1), ".."), at2), "]");
            return [code, this.ORDER_MEMBER];
        },
        text_changeCase: function (block) {
            // Change capitalization.
            var OPERATORS = new (System.Collections.Generic.Dictionary$2(String,String))();
            OPERATORS.add("UPPERCASE", ".upcase");
            OPERATORS.add("LOWERCASE", ".downcase");
            OPERATORS.add("TITLECASE", null);
            var code;
            var operator = OPERATORS.get(block.getFieldValue("CASE"));
            if (!System.String.isNullOrEmpty(operator)) {
                operator = OPERATORS.get(block.getFieldValue("CASE"));
                var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_MEMBER);
                if (System.String.isNullOrEmpty(argument0)) {
                    argument0 = "''";
                }
                code = System.String.concat(argument0, operator);
            } else {
                // Title case is not a native Ruby function. Define one.
                var functionName = Blockly.Ruby.provideFunction_("text_to_title_case", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(str)"), "  str.gsub(/\\S+/) {|txt| txt.capitalize}", "end"]);
                var argument01 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
                if (System.String.isNullOrEmpty(argument01)) {
                    argument01 = "''";
                }
                code = System.String.concat(System.String.concat(System.String.concat(functionName, "("), argument01), ")");
            }

            return [code, this.ORDER_MEMBER];
        },
        text_trim: function (block) {
            // Trim spaces.
            var OPERATORS = new (System.Collections.Generic.Dictionary$2(String,String))();
            OPERATORS.add("LEFT", ".lstrip");
            OPERATORS.add("RIGHT", ".rstrip");
            OPERATORS.add("BOTH", ".strip");
            var operator = OPERATORS.get(block.getFieldValue("MODE"));
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_MEMBER);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            var code = System.String.concat(argument0, operator);
            return [code, this.ORDER_MEMBER];
        },
        text_print: function (block) {
            // Print statement.
            var argument0 = Blockly.Ruby.valueToCode(block, "TEXT", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "''";
            }
            return System.String.concat(System.String.concat("blockly_puts(", argument0), ")\n");
        },
        text_prompt: function (block) {
            // Prompt function.
            var functionName = Blockly.Ruby.provideFunction_("text_prompt", [System.String.concat(System.String.concat("def ", Blockly.Ruby.functionNamePlaceholder()), "(msg):"), "    print (msg)", "    $stdin.gets"]);
            var msg = Blockly.Ruby.quote_(block.getFieldValue("TEXT"));
            var code = System.String.concat(System.String.concat(System.String.concat(functionName, "("), msg), ")");
            var toNumber = Bridge.referenceEquals(block.getFieldValue("TYPE"), "NUMBER");
            if (toNumber) {
                code = System.String.concat(code, ".to_f");
            }
            return [code, this.ORDER_FUNCTION_CALL];
        },
        variables_get: function (block) {
            // Variable getter.
            var code = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return [code, this.ORDER_ATOMIC];
        },
        variables_set: function (block) {
            // Variable setter.
            var argument0 = Blockly.Ruby.valueToCode(block, "VALUE", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument0)) {
                argument0 = "0";
            }
            var varName = Blockly.Ruby.variableDB_.getRubyName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
            return System.String.concat(System.String.concat(System.String.concat(varName, " = "), argument0), "\n");
        },
        switch_case_number: function (block) {
            // case/when/else condition.
            var argument = Blockly.Ruby.valueToCode(block, "SWITCH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "-1";
            }
            var code = System.String.concat(System.String.concat("case ", argument), "\n");
            var n = 0;
            argument = block.getFieldValue(System.String.concat("CASE_VALUE", n));
            if (System.String.isNullOrEmpty(argument)) {
                argument = n.toString();
            }
            var branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat("when ", argument), "\n"), branch)));
            for (n = 1; n <= block.caseCount_; n = (n + 1) | 0) {
                argument = block.getFieldValue(System.String.concat("CASE_VALUE", n));
                if (System.String.isNullOrEmpty(argument)) {
                    argument = n.toString();
                }
                branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat("when ", argument), "\n"), branch)));
            }
            if (block.defaultCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "DEFAULT");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat("else\n", branch)));
            }
            code = System.String.concat(code, "end\n");
            return code;
        },
        switch_case_text: function (block) {
            // case/when/else condition.
            var argument = Blockly.Ruby.valueToCode(block, "SWITCH", Blockly.Ruby.ORDER_NONE);
            if (System.String.isNullOrEmpty(argument)) {
                argument = "-1";
            }
            var code = System.String.concat(System.String.concat("case ", argument), "\n");
            var n = 0;
            argument = block.getFieldValue(System.String.concat("CASE_VALUE", n));
            if (System.String.isNullOrEmpty(argument)) {
                argument = n.toString();
            }
            var branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
            if (System.String.isNullOrEmpty(branch)) {
                branch = "\n";
            }
            code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat("when ", argument), "\n"), branch)));
            for (n = 1; n <= block.caseCount_; n = (n + 1) | 0) {
                argument = block.getFieldValue(System.String.concat("CASE_VALUE", n));
                if (System.String.isNullOrEmpty(argument)) {
                    argument = n.toString();
                }
                branch = Blockly.Ruby.statementToCode(block, System.String.concat("DO", n));
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat(System.String.concat(System.String.concat("when ", argument), "\n"), branch)));
            }
            if (block.defaultCount_ !== 0) {
                branch = Blockly.Ruby.statementToCode(block, "DEFAULT");
                if (System.String.isNullOrEmpty(branch)) {
                    branch = "\n";
                }
                code = System.String.concat(code, (System.String.concat("else\n", branch)));
            }
            code = System.String.concat(code, "end\n");
            return code;
        }
    });

    Bridge.define("$AnonymousType$26", $_, {
        $kind: "anonymous",
        ctor: function (object, dropSelf) {
            this.object = object;
            this.dropSelf = dropSelf;
        },
        getobject : function () {
            return this.object;
        },
        getdropSelf : function () {
            return this.dropSelf;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$26)) {
                return false;
            }
            return Bridge.equals(this.object, o.object) && Bridge.equals(this.dropSelf, o.dropSelf);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7226307510, this.object, this.dropSelf]);
            return h;
        },
        toJSON: function () {
            return {
                object : this.object,
                dropSelf : this.dropSelf
            };
        }
    });

    Bridge.define("$AnonymousType$27", $_, {
        $kind: "anonymous",
        ctor: function (dropSelf) {
            this.dropSelf = dropSelf;
        },
        getdropSelf : function () {
            return this.dropSelf;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$27)) {
                return false;
            }
            return Bridge.equals(this.dropSelf, o.dropSelf);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7243084726, this.dropSelf]);
            return h;
        },
        toJSON: function () {
            return {
                dropSelf : this.dropSelf
            };
        }
    });

    Bridge.ns("WebMrbc.Ruby", $_);

    Bridge.apply($_.WebMrbc.Ruby, {
        f1: function (name, type) {

            if (Bridge.referenceEquals(type, Blockly.Variables.NAME_TYPE)) {

                var scope = Blockly.Ruby.variableDB_.localVars;

                while (scope != null) {

                    if (name in scope) {
                        return scope["name"];
                    }

                    scope = scope["chain"];
                }

                return System.String.concat("@", Blockly.Ruby.variableDB_.getName(name, type));
            } else {
                return Blockly.Ruby.variableDB_.getName(name, type);
            }
        },
        f2: function () {
            var previousLV = Blockly.Ruby.variableDB_.localVars;
            var previousDB = Blockly.Ruby.variableDB_.localVarsDB;

            Blockly.Ruby.variableDB_.localVars = Object("create", null);
            Blockly.Ruby.variableDB_.localVarsDB = new Blockly.Names(Blockly.Ruby.reservedWords());

            Blockly.Ruby.variableDB_.localVars["chain"] = previousLV;
            Blockly.Ruby.variableDB_.localVarsDB.chain = previousDB;
        },
        f3: function (name, type) {
            Blockly.Ruby.variableDB_.localVars[name] = this.variableDB_.localVarsDB.getName(name, Blockly.Variables.NAME_TYPE);
            return Blockly.Ruby.variableDB_.localVars[name].toString();
        },
        f4: function () {
            Blockly.Ruby.variableDB_.localVars = this.variableDB_.localVars["chain"];
            Blockly.Ruby.variableDB_.localVarsDB = this.variableDB_.localVarsDB.chain;
        },
        f5: function () {
            return Blockly.Ruby.provideFunction_("for_loop", ["# loops though all numbers from +params[:from]+ to +params[:to]+ by the step", "# value +params[:by]+ and calls the given block passing the numbers", "def ' + Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_() + ' params", "", "  from = params[:from] #.to_f", "  to = params[:to] #.to_f", "  by = params[:by].abs #.to_f", "", "  from.step(to, (from > to) ? -1 * by : by) do |value|", "    yield value", "  end", "", "end"]);
        }
    });

    Bridge.define("WebMrbc.SdCloseBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをクローズします").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdCopyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをコピーする");
            this.appendValueInput("SRC_FILENAME").setCheck("String").appendField("コピー元ファイル名");
            this.appendValueInput("DST_FILENAME").setCheck("String").appendField("コピー先ファイル名");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdExistsBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルが存在するかどうか調べる");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdFlushBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの書き込みをフラッシュします").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdMkdirBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ディレクトリを作成する");
            this.appendValueInput("DIRNAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdOpenBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルをオープンします").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.appendValueInput("FILENAME").setCheck("String").appendField("ファイル名");
            this.appendDummyInput().appendField("モード").appendField(new Blockly.FieldDropdown([["Read", "READ"], ["Append", "APPEND"], ["New Create", "NEW_CREATE"]]), "SD_OPEN_MODE");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdPositionBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルのseek位置を取得します").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルから1バイト読み込みます").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdRemoveBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルを削除する");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdRmdirBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ディレクトリを削除する");
            this.appendValueInput("DIRNAME").setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdSeekBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルの読み出し位置を移動する").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.appendValueInput("POSITION").setCheck("Number").appendField("バイト数");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdSizeBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルのサイズを取得します").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SdWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルにバイナリデータを書き込む").appendField(WebMrbc.GrSakura.sdFileHandles(), "SD_FILE_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SendEsvBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 を送信", [new $_.$AnonymousType$18("field_variable", "ESV", "item")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SerialAvailableBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルデータがあるかどうか調べます").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialBpsBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ボーレートを設定します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.appendValueInput("BPS").setCheck("Number").appendField("ボーレート");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialFlashBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルデータをフラッシュします").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialNewBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアル通信を初期化します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.appendValueInput("BPS").setCheck("Number").appendField("ボーレート");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialPrintBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルに出力します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.appendValueInput("STR").setCheck("String").appendField("文字列");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialPrintlnBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルに\\r\\n付きで出力します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.appendValueInput("STR").setCheck("String").appendField("文字列");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルからデータを取得します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SerialWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("シリアルにデータを出力します").appendField(WebMrbc.GrSakura.serialPorts(), "SERIAL_PORT_NO");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("データサイズ");
            this.setInputsInline(true);
            this.setOutput(true, "Array");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoAngleBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldAngle("180", Bridge.fn.bind(this, this.validator)), "VALUE");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        validator: function (text) {
            if (text == null) {
                return null;
            }
            var a = parseFloat(text);
            if (isNaN(a)) {
                return null;
            }
            a %= 180;
            if (a < 0) {
                a += 180;
            }
            return System.Double.format(a, 'G');
        }
    });

    Bridge.define("WebMrbc.ServoAttachBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("サーボ出力を任意のピンに割り当てます").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendDummyInput().appendField("割り当てるピン番号").appendField(WebMrbc.GrSakura.pwmPins(), "PIN_NO").appendField("Min").appendField(new Blockly.FieldTextInput("default"), "MIN").appendField("Max").appendField(new Blockly.FieldTextInput("default"), "MAX");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoAttachedBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ピンにサーボが割り当てられているかを確認する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoDetachBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("サーボの動作を止め、割り込みを禁止する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoReadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("最後に設定された角度を読み出す").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoUsBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("サーボモータにus単位で角度を指定する").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendValueInput("US").setCheck("Number").appendField("出力したいパルスの幅");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoUsValueBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("0", 0, 19999, 1), "VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("パルスの幅 1～19999, 0で出力 OFF");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ServoWriteBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("サーボの角度をセットします").appendField(new Blockly.FieldNumber("0", 0, 11, 1), "CH");
            this.appendValueInput("ANGLE").setCheck("Number").appendField("角度");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SvctaskCallTimeoutBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 のタイムアウト処理を行う", [new $_.$AnonymousType$18("field_variable", "SVC", "item")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SvctaskIsMatchBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 で %2 ノード %3 は %4 通信端点 %5 と %6 電文 %7 に対応している", [new $_.$AnonymousType$18("field_variable", "SVC", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "NODE", "EObject"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "ENDPOINT", "String"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "EDTAT", "String")], "Boolean", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SvctaskProgressBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 %2 の時間を %3 [ms]経過させる", [new $_.$AnonymousType$18("field_variable", "SVC", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "ELAPSE", "Number")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SvctaskRecvMsgBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13("%1 に %2 通信端点 %3 からの %4 データ %5 を渡す", [new $_.$AnonymousType$18("field_variable", "SVC", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "ENDPOINT", "String"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "DATA", "String")], null, null, 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SvctaskSetTimer", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$28("%1 %2 のタイマーを %3 [ms]に設定", [new $_.$AnonymousType$18("field_variable", "SVC", "item"), new $_.$AnonymousType$17("input_dummy"), new $_.$AnonymousType$12("input_value", "TIMER", "Number")], 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("$AnonymousType$28", $_, {
        $kind: "anonymous",
        ctor: function (message0, args0, colour, tooltip, helpUrl) {
            this.message0 = message0;
            this.args0 = args0;
            this.colour = colour;
            this.tooltip = tooltip;
            this.helpUrl = helpUrl;
        },
        getmessage0 : function () {
            return this.message0;
        },
        getargs0 : function () {
            return this.args0;
        },
        getcolour : function () {
            return this.colour;
        },
        gettooltip : function () {
            return this.tooltip;
        },
        gethelpUrl : function () {
            return this.helpUrl;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$28)) {
                return false;
            }
            return Bridge.equals(this.message0, o.message0) && Bridge.equals(this.args0, o.args0) && Bridge.equals(this.colour, o.colour) && Bridge.equals(this.tooltip, o.tooltip) && Bridge.equals(this.helpUrl, o.helpUrl);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7259861942, this.message0, this.args0, this.colour, this.tooltip, this.helpUrl]);
            return h;
        },
        toJSON: function () {
            return {
                message0 : this.message0,
                args0 : this.args0,
                colour : this.colour,
                tooltip : this.tooltip,
                helpUrl : this.helpUrl
            };
        }
    });

    Bridge.define("WebMrbc.SvctaskTimerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15("%1 のタイマー値", [new $_.$AnonymousType$18("field_variable", "SVC", "item")], "Number", 230, "", "http://www.example.com/"));
        }
    });

    Bridge.define("WebMrbc.SwitchCaseNumberBlock", {
        inherits: [WebMrbc.Block],
        caseCount_: 0,
        defaultCount_: 0,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {void}
         */
        init: function () {
            this.setHelpUrl("http://www.example.com/");
            this.setColour(210);
            this.appendValueInput("SWITCH").setCheck("Number").appendField("右の数値が");
            this.appendDummyInput("CASE0").appendField("右の数値と").appendField(new Blockly.FieldNumber("0", "-Infinity", "Infinity", 1), "CASE_VALUE0");
            this.appendStatementInput("DO0").appendField("同じなら");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setMutator(new Blockly.Mutator(["switch_case_number_case", "switch_case_number_default"]));
            this.setTooltip(Bridge.fn.bind(this, $_.WebMrbc.SwitchCaseNumberBlock.f1));
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
        },
        /**
         * Create XML to represent the number of else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {Element}        XML storage element.
         */
        mutationToDom: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return null;
            }
            var container = document.createElement("mutation");
            if (this.caseCount_ !== 0) {
                container.setAttribute("case", this.caseCount_.toString());
            }
            if (this.defaultCount_ !== 0) {
                container.setAttribute("default", "1");
            }
            return container;
        },
        /**
         * Parse XML to restore the else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Element}    xmlElement    XML storage element.
         * @return  {void}
         */
        domToMutation: function (xmlElement) {
            this.caseCount_ = parseInt(xmlElement.getAttribute("case"), 10) || 0;
            this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10) || 0;
            this.updateShape_();
        },
        /**
         * Populate the mutator"s dialog with this block"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Workspace}    workspace    Mutator"s workspace.
         * @return  {Blockly.Block}                     Root block in mutator.
         */
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("switch_case_number_first_case");
            containerBlock.initSvg();
            var connection = containerBlock.nextConnection;
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                var elseifBlock = workspace.newBlock("switch_case_number_case");
                elseifBlock.initSvg();
                connection.connect(elseifBlock.previousConnection);
                connection = elseifBlock.nextConnection;
            }
            if (this.defaultCount_ !== 0) {
                var elseBlock = workspace.newBlock("switch_case_number_default");
                elseBlock.initSvg();
                connection.connect(elseBlock.previousConnection);
            }
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        compose: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            // Count number of inputs.
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
            var statementConnections = System.Array.init(0, null);
            var elseStatementConnection = null;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_number_case": 
                        this.caseCount_ = (this.caseCount_ + 1) | 0;
                        statementConnections.push(clauseBlock.statementConnection_);
                        break;
                    case "switch_case_number_default": 
                        this.defaultCount_ = (this.defaultCount_ + 1) | 0;
                        elseStatementConnection = clauseBlock.statementConnection_;
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                Blockly.Mutator.reconnect(statementConnections[i], this, System.String.concat("DO", i));
            }
            Blockly.Mutator.reconnect(elseStatementConnection, this, "DEFAULT");
        },
        /**
         * Store pointers to any connected child blocks.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        saveConnections: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            var i = 1;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_number_case": 
                        {
                            var inputCase = this.getInput(System.String.concat("CASE", i));
                            var inputDo = this.getInput(System.String.concat("DO", i));
                            clauseBlock.statementConnection_ = (inputDo != null) ? inputDo.connection.targetConnection : null;
                            i = (i + 1) | 0;
                        }
                        break;
                    case "switch_case_number_default": 
                        {
                            var inputDo1 = this.getInput("DEFAULT");
                            clauseBlock.statementConnection_ = (inputDo1 != null) ? inputDo1.connection.targetConnection : null;
                        }
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }

                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
        },
        /**
         * Modify this block to have the correct number of inputs.
         *
         * @instance
         * @private
         * @this WebMrbc.SwitchCaseNumberBlock
         * @memberof WebMrbc.SwitchCaseNumberBlock
         * @return  {void}
         */
        updateShape_: function () {
            // Delete everything.
            if (this.getInput("DEFAULT") != null) {
                this.removeInput("DEFAULT");
            }
            var i = 1;
            while (this.getInput(System.String.concat("CASE", i)) != null) {
                this.removeInput(System.String.concat("CASE", i));
                this.removeInput(System.String.concat("DO", i));
                i = (i + 1) | 0;
            }
            // Rebuild block.
            for (i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                this.appendDummyInput(System.String.concat("CASE", i)).appendField("右の数値と").appendField(new Blockly.FieldNumber(i.toString(), "-Infinity", "Infinity", 1), System.String.concat("CASE_VALUE", i));
                this.appendStatementInput(System.String.concat("DO", i)).appendField("同じなら");
            }
            if (this.defaultCount_ !== 0) {
                this.appendStatementInput("DEFAULT").appendField("なければ");
            }
        }
    });

    Bridge.ns("WebMrbc.SwitchCaseNumberBlock", $_);

    Bridge.apply($_.WebMrbc.SwitchCaseNumberBlock, {
        f1: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return "数値の等しいブロックを実行";
            } else if ((this.caseCount_ === 0) && (this.defaultCount_ !== 0)) {
                return "数値の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
            } else if ((this.caseCount_ !== 0) && (this.defaultCount_ === 0)) {
                return "数値の等しいブロックを実行";
            } else if ((this.caseCount_ !== 0) && (this.defaultCount_ !== 0)) {
                return "数値の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
            }
            return "";
        }
    });

    Bridge.define("WebMrbc.SwitchCaseTextBlock", {
        inherits: [WebMrbc.Block],
        caseCount_: 0,
        defaultCount_: 0,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {void}
         */
        init: function () {
            this.setHelpUrl("http://www.example.com/");
            this.setColour(210);
            this.appendValueInput("SWITCH").setCheck("String").appendField("右の文字列が");
            this.appendDummyInput("CASE0").appendField("右の文字列と").appendField(new Blockly.FieldTextInput("0"), "CASE_VALUE0");
            this.appendStatementInput("DO0").appendField("同じなら");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setMutator(new Blockly.Mutator(["switch_case_text_case", "switch_case_text_default"]));
            this.setTooltip(Bridge.fn.bind(this, $_.WebMrbc.SwitchCaseTextBlock.f1));
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
        },
        /**
         * Create XML to represent the text of else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {Element}        XML storage element.
         */
        mutationToDom: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return null;
            }
            var container = document.createElement("mutation");
            if (this.caseCount_ !== 0) {
                container.setAttribute("case", this.caseCount_.toString());
            }
            if (this.defaultCount_ !== 0) {
                container.setAttribute("default", "1");
            }
            return container;
        },
        /**
         * Parse XML to restore the else-if and else inputs.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Element}    xmlElement    XML storage element.
         * @return  {void}
         */
        domToMutation: function (xmlElement) {
            this.caseCount_ = parseInt(xmlElement.getAttribute("case"), 10) || 0;
            this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10) || 0;
            this.updateShape_();
        },
        /**
         * Populate the mutator"s dialog with this block"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Workspace}    workspace    Mutator"s workspace.
         * @return  {Blockly.Block}                     Root block in mutator.
         */
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("switch_case_text_first_case");
            containerBlock.initSvg();
            var connection = containerBlock.nextConnection;
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                var elseifBlock = workspace.newBlock("switch_case_text_case");
                elseifBlock.initSvg();
                connection.connect(elseifBlock.previousConnection);
                connection = elseifBlock.nextConnection;
            }
            if (this.defaultCount_ !== 0) {
                var elseBlock = workspace.newBlock("switch_case_text_default");
                elseBlock.initSvg();
                connection.connect(elseBlock.previousConnection);
            }
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog"s components.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        compose: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            // Count text of inputs.
            this.caseCount_ = 0;
            this.defaultCount_ = 0;
            var statementConnections = System.Array.init(0, null);
            var elseStatementConnection = null;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_text_case": 
                        this.caseCount_ = (this.caseCount_ + 1) | 0;
                        statementConnections.push(clauseBlock.statementConnection_);
                        break;
                    case "switch_case_text_default": 
                        this.defaultCount_ = (this.defaultCount_ + 1) | 0;
                        elseStatementConnection = clauseBlock.statementConnection_;
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }
                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                Blockly.Mutator.reconnect(statementConnections[i], this, System.String.concat("DO", i));
            }
            Blockly.Mutator.reconnect(elseStatementConnection, this, "DEFAULT");
        },
        /**
         * Store pointers to any connected child blocks.
         *
         * @instance
         * @public
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @param   {Blockly.Block}    containerBlock    Root block in mutator.
         * @return  {void}
         */
        saveConnections: function (containerBlock) {
            var clauseBlock = containerBlock.nextConnection.targetBlock();
            var i = 1;
            while (clauseBlock != null) {
                switch (clauseBlock.type) {
                    case "switch_case_text_case": 
                        {
                            var inputCase = this.getInput(System.String.concat("CASE", i));
                            var inputDo = this.getInput(System.String.concat("DO", i));
                            clauseBlock.statementConnection_ = (inputDo != null) ? inputDo.connection.targetConnection : null;
                            i = (i + 1) | 0;
                        }
                        break;
                    case "switch_case_text_default": 
                        {
                            var inputDo1 = this.getInput("DEFAULT");
                            clauseBlock.statementConnection_ = (inputDo1 != null) ? inputDo1.connection.targetConnection : null;
                        }
                        break;
                    default: 
                        throw new System.Exception("Unknown block type.");
                }

                clauseBlock = (clauseBlock.nextConnection != null) ? clauseBlock.nextConnection.targetBlock() : null;
            }
        },
        /**
         * Modify this block to have the correct text of inputs.
         *
         * @instance
         * @private
         * @this WebMrbc.SwitchCaseTextBlock
         * @memberof WebMrbc.SwitchCaseTextBlock
         * @return  {void}
         */
        updateShape_: function () {
            // Delete everything.
            if (this.getInput("DEFAULT") != null) {
                this.removeInput("DEFAULT");
            }
            var i = 1;
            while (this.getInput(System.String.concat("CASE", i)) != null) {
                this.removeInput(System.String.concat("CASE", i));
                this.removeInput(System.String.concat("DO", i));
                i = (i + 1) | 0;
            }
            // Rebuild block.
            for (i = 1; i <= this.caseCount_; i = (i + 1) | 0) {
                this.appendDummyInput(System.String.concat("CASE", i)).appendField("右の文字列と").appendField(new Blockly.FieldTextInput(i.toString()), System.String.concat("CASE_VALUE", i));
                this.appendStatementInput(System.String.concat("DO", i)).appendField("同じなら");
            }
            if (this.defaultCount_ !== 0) {
                this.appendStatementInput("DEFAULT").appendField("なければ");
            }
        }
    });

    Bridge.ns("WebMrbc.SwitchCaseTextBlock", $_);

    Bridge.apply($_.WebMrbc.SwitchCaseTextBlock, {
        f1: function () {
            if ((this.caseCount_ === 0) && (this.defaultCount_ === 0)) {
                return "文字列の等しいブロックを実行";
            } else if ((this.caseCount_ === 0) && (this.defaultCount_ !== 0)) {
                return "文字列の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
            } else if ((this.caseCount_ !== 0) && (this.defaultCount_ === 0)) {
                return "文字列の等しいブロックを実行";
            } else if ((this.caseCount_ !== 0) && (this.defaultCount_ !== 0)) {
                return "文字列の等しいブロックを実行、等しいものがなければ最後のブロックを実行";
            }
            return "";
        }
    });

    Bridge.define("WebMrbc.SystemExitBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("終了させます");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemFileLoadBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("ファイルローダーを呼び出します");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemGetMrbPathBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("実行しているmrbファイルパスを取得します");
            this.setInputsInline(true);
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemPopBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("フラッシュメモリから読み出します");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("サイズ");
            this.setInputsInline(true);
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemPushBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("フラッシュメモリに書き込みます");
            this.appendValueInput("ADDRESS").setCheck("Number").appendField("開始アドレス");
            this.appendValueInput("DATA").setCheck("String").appendField("データ");
            this.appendValueInput("LENGTH").setCheck("Number").appendField("サイズ");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemResetBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("リセットします");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemSetRunBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("次に実行するスクリプトファイルをセットします");
            this.appendValueInput("FILENAME").setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemUseSdBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("SDカードを使えるようにします");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemUseWifiBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("WiFiモジュールESP8266ボードを使えるようにします");
            this.setInputsInline(true);
            this.setOutput(true, "Boolean");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.SystemVersionBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("システムのバージョンを取得します");
            this.setOutput(true, "String");
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.TextAppendBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.appendValueInput("TEXT").appendField(Blockly.Msg.TEXT_APPEND_TO).appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), "VAR").appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                return System.String.replaceAll(Blockly.Msg.TEXT_APPEND_TOOLTIP, "%1", thisBlock.getFieldValue("VAR"));
            });
        }
    });

    Bridge.define("WebMrbc.TextBlock", {
        inherits: [WebMrbc.Block],
        statics: {
            newQuote_: function (open, RTL) {
                var file;
                if (open === RTL) {
                    file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==";
                } else {
                    file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC";
                }
                return new Blockly.FieldImage(file, 12, 12, "\"");
            }
        },
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.appendDummyInput().appendField(this.newQuote_(true)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(false));
            this.setOutput(true, "String");
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            // Text block is trivial.  Use tooltip of parent block if it exists.
            this.setTooltip(function () {
                var parent = thisBlock.getParent();
                return (parent != null && parent.getInputsInline() && !System.String.isNullOrEmpty(parent.tooltip)) ? parent.tooltip : Blockly.Msg.TEXT_TEXT_TOOLTIP;
            });
        },
        newQuote_: function (open) {
            return WebMrbc.TextBlock.newQuote_(open, this.RTL);
        }
    });

    Bridge.define("WebMrbc.TextChangeCaseBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]];
            this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(OPERATORS), "CASE");
            this.setOutput(true, "String");
            this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP);
        }
    });

    Bridge.define("WebMrbc.TextCharAtBlock", {
        inherits: [WebMrbc.Block],
        WHERE_OPTIONS: null,
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.WHERE_OPTIONS = [[Blockly.Msg.TEXT_CHARAT_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_CHARAT_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_CHARAT_FIRST, "FIRST"], [Blockly.Msg.TEXT_CHARAT_LAST, "LAST"], [Blockly.Msg.TEXT_CHARAT_RANDOM, "RANDOM"]];
            this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.setOutput(true, "String");
            this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);
            this.appendDummyInput("AT");
            this.setInputsInline(true);
            this.updateAt_(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                var where = thisBlock.getFieldValue("WHERE");
                var tooltip = Blockly.Msg.TEXT_CHARAT_TOOLTIP;
                if (Bridge.referenceEquals(where, "FROM_START") || Bridge.referenceEquals(where, "FROM_END")) {
                    var msg = (Bridge.referenceEquals(where, "FROM_START")) ? Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP : Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP;
                    tooltip = System.String.concat(tooltip, (System.String.concat("  ", System.String.replaceAll(msg, "%1", thisBlock.workspace.options.oneBasedIndex ? "#1" : "#0"))));
                }
                return tooltip;
            });
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var isAt = this.getInput("AT").type === Blockly.INPUT_VALUE;
            container.setAttribute("at", System.Boolean.toString(isAt));
            return container;
        },
        domToMutation: function (xmlElement) {
            // Note: Until January 2013 this block did not have mutations,
            // so "at" defaults to true.
            var isAt = (!Bridge.referenceEquals(xmlElement.getAttribute("at"), "false"));
            this.updateAt_(isAt);
        },
        updateAt_: function (isAt) {
            // Destroy old "AT" and "ORDINAL" inputs.
            this.removeInput("AT");
            this.removeInput("ORDINAL", true);
            // Create either a value "AT" input or a dummy input.
            if (isAt) {
                this.appendValueInput("AT").setCheck("Number");
                if (!System.String.isNullOrEmpty(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) {
                    this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
                }
            } else {
                this.appendDummyInput("AT");
            }
            if (!System.String.isNullOrEmpty(Blockly.Msg.TEXT_CHARAT_TAIL)) {
                this.removeInput("TAIL", true);
                this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL);
            }
            var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, Bridge.fn.bind(this, function (value) {
                var newAt = (Bridge.referenceEquals(value, "FROM_START")) || (Bridge.referenceEquals(value, "FROM_END"));
                // The "isAt" variable is available due to this function being a closure.
                if (newAt !== isAt) {
                    var block = this.sourceBlock_;
                    Bridge.cast(block, WebMrbc.TextCharAtBlock).updateAt_(newAt);
                    // This menu has been destroyed and replaced.  Update the replacement.
                    block.setFieldValue(value, "WHERE");
                    return null;
                }
                return undefined;
            }));
            this.getInput("AT").appendField(menu, "WHERE");
        }
    });

    Bridge.define("WebMrbc.TextCreateJoinContainerBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Texts.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN);
            this.appendStatementInput("STACK");
            this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.TextCreateJoinItemBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setColour(WebMrbc.Texts.HUE);
            this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.TextGetSubstringBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.WHERE_OPTIONS_1 = [[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]];
            this.WHERE_OPTIONS_2 = [[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]];
            this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
            this.appendDummyInput("AT1");
            this.appendDummyInput("AT2");
            if (!System.String.isNullOrEmpty(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL)) {
                this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
            }
            this.setInputsInline(true);
            this.setOutput(true, "String");
            this.updateAt_(1, true);
            this.updateAt_(2, true);
            this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP);
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            var isAt1 = this.getInput("AT1").type === Blockly.INPUT_VALUE;
            container.setAttribute("at1", System.Boolean.toString(isAt1));
            var isAt2 = this.getInput("AT2").type === Blockly.INPUT_VALUE;
            container.setAttribute("at2", System.Boolean.toString(isAt2));
            return container;
        },
        domToMutation: function (xmlElement) {
            var isAt1 = (Bridge.referenceEquals(xmlElement.getAttribute("at1"), "true"));
            var isAt2 = (Bridge.referenceEquals(xmlElement.getAttribute("at2"), "true"));
            this.updateAt_(1, isAt1);
            this.updateAt_(2, isAt2);
        },
        updateAt_: function (n, isAt) {
            // Create or delete an input for the numeric index.
            // Destroy old "AT" and "ORDINAL" inputs.
            this.removeInput(System.String.concat("AT", n));
            this.removeInput(System.String.concat("ORDINAL", n), true);
            // Create either a value "AT" input or a dummy input.
            if (isAt) {
                this.appendValueInput(System.String.concat("AT", n)).setCheck("Number");
                if (!System.String.isNullOrEmpty(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) {
                    this.appendDummyInput(System.String.concat("ORDINAL", n)).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
                }
            } else {
                this.appendDummyInput(System.String.concat("AT", n));
            }
            // Move tail, if present, to end of block.
            if (n === 2 && !System.String.isNullOrEmpty(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL)) {
                this.removeInput("TAIL", true);
                this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
            }
            var menu = new Blockly.FieldDropdown(this[System.String.concat("WHERE_OPTIONS_", n)], Bridge.fn.bind(this, function (value) {
                var newAt = (Bridge.referenceEquals(value, "FROM_START")) || (Bridge.referenceEquals(value, "FROM_END"));
                // The "isAt" variable is available due to this function being a
                // closure.
                if (newAt !== isAt) {
                    var block = this.sourceBlock_;
                    Bridge.cast(block, WebMrbc.TextGetSubstringBlock).updateAt_(n, newAt);
                    // This menu has been destroyed and replaced.
                    // Update the replacement.
                    block.setFieldValue(value, System.String.concat("WHERE", n));
                    return null;
                }
                return undefined;
            }));

            this.getInput(System.String.concat("AT", n)).appendField(menu, System.String.concat("WHERE", n));
            if (n === 1) {
                this.moveInputBefore("AT1", "AT2");
            }
        }
    });

    Bridge.define("WebMrbc.TextIndexOfBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, "FIRST"], [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, "LAST"]];
            this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.setOutput(true, "Number");
            this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);
            this.appendValueInput("FIND").setCheck("String").appendField(new Blockly.FieldDropdown(OPERATORS), "END");
            if (!System.String.isNullOrEmpty(Blockly.Msg.TEXT_INDEXOF_TAIL)) {
                this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
            }
            this.setInputsInline(true);
            // Assign "this" to a variable for use in the tooltip closure below.
            var thisBlock = this;
            this.setTooltip(function () {
                return System.String.replaceAll(Blockly.Msg.TEXT_INDEXOF_TOOLTIP, "%1", thisBlock.workspace.options.oneBasedIndex ? "0" : "-1");
            });
        }
    });

    Bridge.define("WebMrbc.TextIsEmptyBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.TEXT_ISEMPTY_TITLE, [new $_.$AnonymousType$20("input_value", "VALUE", ["String", "Array"])], "Boolean", WebMrbc.Texts.HUE, Blockly.Msg.TEXT_ISEMPTY_TOOLTIP, Blockly.Msg.TEXT_ISEMPTY_HELPURL));
        }
    });

    Bridge.define("WebMrbc.TextJoinBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.itemCount_ = 2;
            this.updateShape_();
            this.setOutput(true, "String");
            this.setMutator(new Blockly.Mutator(["text_create_join_item"]));
            this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP);
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("items", this.itemCount_.toString());
            return container;
        },
        domToMutation: function (xmlElement) {
            this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
            this.updateShape_();
        },
        decompose: function (workspace) {
            var containerBlock = workspace.newBlock("text_create_join_container");
            containerBlock.initSvg();
            var connection = containerBlock.getInput("STACK").connection;
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var itemBlock = workspace.newBlock("text_create_join_item");
                itemBlock.initSvg();
                connection.connect(itemBlock.previousConnection);
                connection = itemBlock.nextConnection;
            }
            return containerBlock;
        },
        compose: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            // Count number of inputs.
            var connections = System.Array.init(0, null);
            while (itemBlock != null) {
                connections.push(itemBlock.valueConnection_);
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
            // Disconnect any children that don"t belong.
            for (var i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                var connection = this.getInput(System.String.concat("ADD", i)).connection.targetConnection;
                if (connection != null && System.Array.indexOfT(connections, connection) === -1) {
                    connection.disconnect();
                }
            }
            this.itemCount_ = connections.length;
            this.updateShape_();
            // Reconnect any child blocks.
            for (var i1 = 0; i1 < this.itemCount_; i1 = (i1 + 1) | 0) {
                Blockly.Mutator.reconnect(connections[i1], this, System.String.concat("ADD", i1));
            }
        },
        saveConnections: function (containerBlock) {
            var itemBlock = containerBlock.getInputTargetBlock("STACK");
            var i = 0;
            while (itemBlock != null) {
                var input = this.getInput(System.String.concat("ADD", i));
                itemBlock.valueConnection_ = (input != null) ? input.connection.targetConnection : null;
                i = (i + 1) | 0;
                itemBlock = (itemBlock.nextConnection != null) ? itemBlock.nextConnection.targetBlock() : null;
            }
        },
        updateShape_: function () {
            if (this.itemCount_ !== 0 && this.getInput("EMPTY") != null) {
                this.removeInput("EMPTY");
            } else if (this.itemCount_ === 0 && this.getInput("EMPTY") == null) {
                this.appendDummyInput("EMPTY").appendField(this.newQuote_(true)).appendField(this.newQuote_(false));
            }
            // Add new inputs.
            var i;
            for (i = 0; i < this.itemCount_; i = (i + 1) | 0) {
                if (this.getInput(System.String.concat("ADD", i)) == null) {
                    var input = this.appendValueInput(System.String.concat("ADD", i));
                    if (i === 0) {
                        input.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
                    }
                }
            }
            // Remove deleted inputs.
            while (this.getInput(System.String.concat("ADD", i)) != null) {
                this.removeInput(System.String.concat("ADD", i));
                i = (i + 1) | 0;
            }
        },
        newQuote_: function (open) {
            return WebMrbc.TextBlock.newQuote_(open, this.RTL);
        }
    });

    Bridge.define("WebMrbc.TextLengthBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$15(Blockly.Msg.TEXT_LENGTH_TITLE, [new $_.$AnonymousType$20("input_value", "VALUE", ["String", "Array"])], "Number", WebMrbc.Texts.HUE, Blockly.Msg.TEXT_LENGTH_TOOLTIP, Blockly.Msg.TEXT_LENGTH_HELPURL));
        }
    });

    Bridge.define("WebMrbc.TextPrintBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13(Blockly.Msg.TEXT_PRINT_TITLE, [new $_.$AnonymousType$19("input_value", "TEXT")], null, null, WebMrbc.Texts.HUE, Blockly.Msg.TEXT_PRINT_TOOLTIP, Blockly.Msg.TEXT_PRINT_HELPURL));
        }
    });

    Bridge.define("WebMrbc.TextPromptBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var TYPES = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
            // Assign "this" to a variable for use in the closures below.
            var thisBlock = this;
            this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            var dropdown = new Blockly.FieldDropdown(TYPES, function (newOp) {
                thisBlock.updateType_(newOp);
                return undefined;
            });
            this.appendDummyInput().appendField(dropdown, "TYPE").appendField(this.newQuote_(true)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(false));
            this.setOutput(true, "String");
            this.setTooltip(function () {
                return (Bridge.referenceEquals(thisBlock.getFieldValue("TYPE"), "TEXT")) ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
            });
        },
        newQuote_: function (open) {
            return WebMrbc.TextBlock.newQuote_(open, this.RTL);
        },
        updateType_: function (newOp) {
            this.outputConnection.setCheck(Bridge.referenceEquals(newOp, "NUMBER") ? "Number" : "String");
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("type", this.getFieldValue("TYPE"));
            return container;
        },
        domToMutation: function (xmlElement) {
            this.updateType_(xmlElement.getAttribute("type"));
        }
    });

    Bridge.define("WebMrbc.TextPromptExtBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var TYPES = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
            this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            // Assign "this" to a variable for use in the closures below.
            var thisBlock = this;
            var dropdown = new Blockly.FieldDropdown(TYPES, function (newOp) {
                thisBlock.updateType_(newOp);
                return undefined;
            });
            this.appendValueInput("TEXT").appendField(dropdown, "TYPE");
            this.setOutput(true, "String");
            this.setTooltip(function () {
                return (Bridge.referenceEquals(thisBlock.getFieldValue("TYPE"), "TEXT")) ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
            });
        },
        updateType_: function (newOp) {
            this.outputConnection.setCheck(Bridge.referenceEquals(newOp, "NUMBER") ? "Number" : "String");
        },
        mutationToDom: function () {
            var container = document.createElement("mutation");
            container.setAttribute("type", this.getFieldValue("TYPE"));
            return container;
        },
        domToMutation: function (xmlElement) {
            this.updateType_(xmlElement.getAttribute("type"));
        }
    });

    Bridge.define("WebMrbc.TextTrimBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            var OPERATORS = [[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"], [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"], [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]];
            this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);
            this.setColour(WebMrbc.Texts.HUE);
            this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(OPERATORS), "MODE");
            this.setOutput(true, "String");
            this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP);
        }
    });

    Bridge.define("WebMrbc.ToneBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("トーン出力").appendField(WebMrbc.GrSakura.pwmPins(), "PIN_NO");
            this.appendValueInput("FREQUENCY").setCheck("Number").appendField("周波数");
            this.appendValueInput("DURATION").setCheck("Number").appendField("出力を維持する時間[ms]");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(160);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.ToneValueBlock", {
        inherits: [WebMrbc.Block],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldNumber("1000", 2, 62500, 1), "TONE_VALUE");
            this.setOutput(true, "Number");
            this.setColour(160);
            this.setTooltip("Tone 2～62500");
            this.setHelpUrl("http://www.example.com/");
        }
    });

    Bridge.define("WebMrbc.VariablesGetBlock", {
        inherits: [WebMrbc.Block],
        contextMenuType_: "variables_set",
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
            this.setColour(WebMrbc.Variables.HUE);
            this.appendDummyInput().appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
            this.setOutput(true);
            this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
            this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        },
        customContextMenu: function (options) {
            var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                enabled: true
            } );
            var name = this.getFieldValue("VAR");
            option.text = System.String.replaceAll(this.contextMenuMsg_, "%1", name);
            var xmlField = goog.dom.createDom("field", null, name);
            xmlField.setAttribute("name", "VAR");
            var xmlBlock = goog.dom.createDom("block", null, xmlField);
            xmlBlock.setAttribute("type", this.contextMenuType_);
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option);
        }
    });

    Bridge.define("WebMrbc.VariablesSetBlock", {
        inherits: [WebMrbc.Block],
        contextMenuType_: "variables_get",
        ctor: function (type) {
            this.$initialize();
            WebMrbc.Block.ctor.call(this, type);
        },
        init: function () {
            this.jsonInit(new $_.$AnonymousType$13(Blockly.Msg.VARIABLES_SET, [new $_.$AnonymousType$18("field_variable", "VAR", Blockly.Msg.VARIABLES_DEFAULT_NAME), new $_.$AnonymousType$19("input_value", "VALUE")], null, null, WebMrbc.Variables.HUE, Blockly.Msg.VARIABLES_SET_TOOLTIP, Blockly.Msg.VARIABLES_SET_HELPURL));
            this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
        },
        customContextMenu: function (options) {
            var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                enabled: true
            } );
            var name = this.getFieldValue("VAR");
            option.text = System.String.replaceAll(this.contextMenuMsg_, "%1", name);
            var xmlField = goog.dom.createDom("field", null, name);
            xmlField.setAttribute("name", "VAR");
            var xmlBlock = goog.dom.createDom("block", null, xmlField);
            xmlBlock.setAttribute("type", this.contextMenuType_);
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option);
        }
    });

    Bridge.define("WebMrbc.EcnlDataToNumberBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("POSITION").setCheck("Number").appendField("受信データの");
            this.appendDummyInput().appendField("Byte目から").appendField(new Blockly.FieldDropdown([["1", "BYTE"], ["2", "SHORT"], ["4", "INT"]]), "WIDTH").appendField("Byte分の数値");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (Bridge.referenceEquals(this.getInputName(), "SET")) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティ設定ブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlGetPropertyInfoBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("プロパティ").appendField(new Blockly.FieldDropdown([["コード", "pcd"], ["属性", "atr"], ["サイズ", "sz"]]), "MEMBER");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (!System.String.isNullOrEmpty(this.getInputName())) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティアクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlGetSavedPropertyBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("保存してあるプロパティ値").appendField("", "ITEM");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (!System.String.isNullOrEmpty(this.getInputName())) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティアクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlNoOpBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("処理無し");
            this.setPreviousStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (!System.String.isNullOrEmpty(this.getInputName())) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティアクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlNumberToDataBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("POSITION").setCheck("Number").appendField("送信データの");
            this.appendDummyInput().appendField("Byte目から").appendField(new Blockly.FieldDropdown([["1", "BYTE"], ["2", "SHORT"], ["4", "INT"]]), "WIDTH").appendField("Byte分に");
            this.appendValueInput("VALUE").setCheck("Number");
            this.appendDummyInput().appendField("を書き込み");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (Bridge.referenceEquals(this.getInputName(), "GET")) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティ取得アクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlReceivedDataBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("受信データ");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (Bridge.referenceEquals(this.getInputName(), "SET")) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティ設定ブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlReceivedDataSizeBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("受信データサイズ");
            this.setOutput(true, "Number");
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (!System.String.isNullOrEmpty(this.getInputName())) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティアクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlSaveReceivedPropertyBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendDummyInput().appendField("受信プロパティを保存").appendField("", "ITEM");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (!System.String.isNullOrEmpty(this.getInputName())) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティアクセスブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlSetAnnounceRequestBlock", {
        inherits: [WebMrbc.EcnlPropertyLocalBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.EcnlPropertyLocalBlock.ctor.call(this, type);
        },
        init: function () {
            this.appendValueInput("DATA").setCheck("String").appendField("受信データと");
            this.appendDummyInput().appendField("を比較し変化がある場合は通知要求");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("http://www.example.com/");
        },
        onchange: function (ev) {
            if (Bridge.referenceEquals(this.getInputName(), "SET")) {
                this.setWarningText(null);
            } else {
                this.setWarningText("プロパティ設定ブロックのみで使用します");
            }
        }
    });

    Bridge.define("WebMrbc.EcnlTaskWorkspace", {
        inherits: [WebMrbc.IClassWorkspace],
        identifier: null,
        workspace: null,
        config: {
            alias: [
            "getIdentifier", "WebMrbc$IModel$getIdentifier",
            "getWorkspace", "WebMrbc$IClassWorkspace$getWorkspace",
            "getImageUrl", "WebMrbc$IClassWorkspace$getImageUrl",
            "isPreset", "WebMrbc$IClassWorkspace$isPreset",
            "toCode", "WebMrbc$IClassWorkspace$toCode",
            "toDom", "WebMrbc$IClassWorkspace$toDom",
            "loadDom", "WebMrbc$IClassWorkspace$loadDom",
            "reloadToolbox", "WebMrbc$IClassWorkspace$reloadToolbox",
            "openModifyView", "WebMrbc$IClassWorkspace$openModifyView",
            "template", "WebMrbc$IClassWorkspace$template"
            ]
        },
        ctor: function (identifier) {
            this.$initialize();
            this.identifier = identifier;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifier: function () {
            return this.identifier;
        },
        getWorkspace: function () {
            return this.workspace;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineSvcTask(this, WebMrbc.Collections.LocalNode.getenode());
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var $t, $t1;
            var funcs = ["setup", "recv_esv", "break_wait", "timeout", "snd_msg"];
            var procs = ["is_local_addr", "is_multicast_addr", "is_valid_addrid", "get_local_addr", "get_multicast_addr", "get_remote_addr", "get_remote_id", "set_remote_addr", "add_remote_addr"];
            var echonet_category = $("#echonet_category", toolbox);

            echonet_category.html("");
            $t = Bridge.getEnumerator(funcs);
            while ($t.moveNext()) {
                var name = $t.getCurrent();
                var block = $("<block>");
                block.attr("type", "procedures_defnoreturn");

                var field = $("<field>");
                field.attr("name", "NAME");
                field.text(name);
                block.append(field);

                echonet_category.append(block);
            }

            $t1 = Bridge.getEnumerator(procs);
            while ($t1.moveNext()) {
                var name1 = $t1.getCurrent();
                var block1 = $("<block>");
                block1.attr("type", "procedures_defreturn");

                var field1 = $("<field>");
                field1.attr("name", "NAME");
                field1.text(name1);
                block1.append(field1);

                echonet_category.append(block1);
            }
        },
        openModifyView: function (callback) {
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifier%", this.identifier);
            template = System.String.replaceAll(template, "%attribute%", "SvcTask");
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });

    Bridge.define("WebMrbc.EObjectWorkspace", {
        inherits: [WebMrbc.IClassWorkspace],
        statics: {
            createGetDateTimeBlock$1: function (name, item) {
                var rtcBlock = $("<block>");
                rtcBlock.attr("type", "rtc_get_datetime_item");

                var field = $("<field>");
                field.attr("name", "ARRAY");
                field.text(name);
                rtcBlock.append(field);

                field = $("<field>");
                field.attr("name", "ITEM");
                field.text(item);
                rtcBlock.append(field);

                return rtcBlock;
            },
            createGetDateTimeBlock: function (name) {
                var block = $("<block>");
                block.attr("type", "variables_set");

                var field = $("<field>");
                field.attr("name", "VAR");
                field.text(name);
                block.append(field);

                var value = $("<value>");
                value.attr("name", "VALUE");
                block.append(value);

                var rtcBlock = $("<block>");
                rtcBlock.attr("type", "rtc_gettime");
                value.append(rtcBlock);

                return block;
            },
            createSetDateTimeItemBlock: function (localvar, item, width, pos) {
                var rtcBlock = $("<block>");
                rtcBlock.attr("type", "rtc_set_datetime_item");

                var field = $("<field>");
                field.attr("name", "ARRAY");
                field.text(localvar);
                rtcBlock.append(field);

                field = $("<field>");
                field.attr("name", "ITEM");
                field.text(item);
                rtcBlock.append(field);

                var value = $("<value>");
                value.attr("name", "VALUE");
                rtcBlock.append(value);

                var dataBlock = WebMrbc.EObjectWorkspace.createReceivedData(width, pos);
                value.append(dataBlock);

                return rtcBlock;
            },
            createAnnoCheck: function () {
                var annoBlock = $("<block>");
                annoBlock.attr("type", "set_announce_request");

                var value = $("<value>");
                value.attr("name", "DATA");
                annoBlock.append(value);

                var subblock = $("<block>");
                subblock.attr("type", "get_saved_property");
                value.append(subblock);
                return annoBlock;
            },
            createSizeCheckBlocks: function () {
                var field;
                var ifBlock = $("<block>");
                ifBlock.attr("type", "controls_if");

                var value = $("<value>");
                value.attr("name", "IF0");
                ifBlock.append(value);

                var compBlock = $("<block>");
                compBlock.attr("type", "logic_compare");
                value.append(compBlock);

                field = $("<field>");
                field.attr("name", "OP");
                field.text("NEQ");
                compBlock.append(field);

                value = $("<value>");
                value.attr("name", "A");
                compBlock.append(value);

                var subblock = $("<block>");
                subblock.attr("type", "received_data_size");
                value.append(subblock);

                value = $("<value>");
                value.attr("name", "B");
                compBlock.append(value);

                subblock = $("<block>");
                subblock.attr("type", "get_property_info");
                value.append(subblock);

                field = $("<field>");
                field.attr("name", "MEMBER");
                field.text("sz");
                subblock.append(field);

                var doStatement = $("<statement>");
                doStatement.attr("name", "DO0");
                ifBlock.append(doStatement);

                subblock = $("<block>");
                subblock.attr("type", "no_op");
                doStatement.append(subblock);

                return ifBlock;
            },
            createReceivedData: function (width, pos) {
                var block = $("<block>");
                block.attr("type", "data_to_number");

                var field = $("<field>");
                field.attr("name", "WIDTH");
                field.text(width);
                block.append(field);

                var value = $("<value>");
                value.attr("name", "POSITION");
                block.append(value);

                var subBlock = $("<shadow>");
                subBlock.attr("type", "math_number");
                value.append(subBlock);

                field = $("<field>");
                field.attr("name", "NUM");
                field.text(pos.toString());
                subBlock.append(field);

                return block;
            }
        },
        eobject: null,
        workspace: null,
        callback: null,
        config: {
            alias: [
            "getIdentifier", "WebMrbc$IModel$getIdentifier",
            "getWorkspace", "WebMrbc$IClassWorkspace$getWorkspace",
            "getImageUrl", "WebMrbc$IClassWorkspace$getImageUrl",
            "isPreset", "WebMrbc$IClassWorkspace$isPreset",
            "toCode", "WebMrbc$IClassWorkspace$toCode",
            "toDom", "WebMrbc$IClassWorkspace$toDom",
            "loadDom", "WebMrbc$IClassWorkspace$loadDom",
            "reloadToolbox", "WebMrbc$IClassWorkspace$reloadToolbox",
            "openModifyView", "WebMrbc$IClassWorkspace$openModifyView",
            "template", "WebMrbc$IClassWorkspace$template"
            ]
        },
        ctor: function (eobject) {
            this.$initialize();
            this.eobject = eobject;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifier: function () {
            return this.eobject.identifier;
        },
        getWorkspace: function () {
            return this.workspace;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return false;
        },
        toCode: function () {
            return Blockly.Ruby.defineEObject(this.eobject, this.workspace);
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var $t;
            var echonet_category = $("#echonet_category", toolbox);

            echonet_category.html("");

            $t = Bridge.getEnumerator(this.eobject.properties);
            while ($t.moveNext()) {
                var pi = $t.getCurrent();
                if (WebMrbc.CodeGenerator.isExtractProperty(pi)) {
                    continue;
                }
                var identifier = WebMrbc.CodeGenerator.getPropertyIdentifier(pi);

                var block = $("<block>");
                block.attr("type", "eproperty_new");

                var field = $("<field>");
                field.attr("name", "IDENTIFIER");
                field.text(identifier);
                block.append(field);

                field = $("<field>");
                field.attr("name", "DESCRIPTION");
                field.text(pi.description);
                block.append(field);

                field = $("<field>");
                field.attr("name", "PROPERTY_CODE");
                field.text(System.Byte.format(pi.propertyCode, "X2"));
                block.append(field);

                field = $("<field>");
                field.attr("name", "PROPERTY_SIZE");
                field.text(pi.size.toString());
                block.append(field);

                echonet_category.append(block);

                {
                    var statement = $("<statement>");
                    statement.attr("name", "SET");
                    block.append(statement);

                    var ifBlock = WebMrbc.EObjectWorkspace.createSizeCheckBlocks();
                    statement.append(ifBlock);

                    var next = $("<next>");
                    ifBlock.append(next);

                    if (System.Array.contains(pi.access, "ANNOUNCE", String)) {
                        var annoBlock = WebMrbc.EObjectWorkspace.createAnnoCheck();
                        next.append(annoBlock);

                        next = $("<next>");
                        annoBlock.append(next);
                    }

                    var setBlock = null;
                    switch (pi.propertyCode) {
                        case 151: 
                            setBlock = this.createSetTime();
                            break;
                        case 152: 
                            setBlock = this.createSetDate();
                            break;
                        default: 
                            var valueRange = { };
                            if (WebMrbc.CodeGenerator.hasPropSetter(pi, valueRange)) {
                                setBlock = this.createSetStatement(valueRange.v);
                            } else {
                                setBlock = $("<block>");
                                setBlock.attr("type", "save_received_property");
                            }
                            break;
                    }

                    if (setBlock != null) {
                        next.append(setBlock);
                    }
                }

                {
                    var value = $("<value>");
                    value.attr("name", "SET_RET");
                    block.append(value);

                    var subblock = $("<block>");
                    subblock.attr("type", "get_property_info");
                    value.append(subblock);

                    field = $("<field>");
                    field.attr("name", "MEMBER");
                    field.text("sz");
                    subblock.append(field);
                }

                {
                    var statement1 = $("<statement>");
                    statement1.attr("name", "GET");
                    block.append(statement1);

                    var ifBlock1 = WebMrbc.EObjectWorkspace.createSizeCheckBlocks();
                    statement1.append(ifBlock1);

                    var getBlock = null;
                    switch (pi.propertyCode) {
                        case 151: 
                            getBlock = this.createGetTime(identifier);
                            break;
                        case 152: 
                            getBlock = this.createGetDate(identifier);
                            break;
                        default: 
                            break;
                    }

                    if (getBlock != null) {
                        var next1 = $("<next>");
                        ifBlock1.append(next1);

                        next1.append(getBlock);
                    }
                }

                {
                    var value1 = $("<value>");
                    value1.attr("name", "GET_RET");
                    block.append(value1);

                    var subblock1 = null;
                    switch (pi.propertyCode) {
                        case 151: 
                            subblock1 = this.createGetRetTime(identifier);
                            break;
                        case 152: 
                            subblock1 = this.createGetRetDate(identifier);
                            break;
                        default: 
                            subblock1 = $("<block>");
                            subblock1.attr("type", "get_saved_property");
                            break;
                    }

                    if (subblock1 != null) {
                        value1.append(subblock1);
                    }
                }
            }
        },
        createSetDate: function () {
            var localvar = "date";
            var setBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock(localvar);

            var next = $("<next>");
            setBlock.append(next);

            var rtcBlock = WebMrbc.EObjectWorkspace.createSetDateTimeItemBlock(localvar, "0", "SHORT", 0);
            next.append(rtcBlock);

            next = $("<next>");
            rtcBlock.append(next);

            rtcBlock = WebMrbc.EObjectWorkspace.createSetDateTimeItemBlock(localvar, "1", "BYTE", 2);
            next.append(rtcBlock);

            next = $("<next>");
            rtcBlock.append(next);

            rtcBlock = WebMrbc.EObjectWorkspace.createSetDateTimeItemBlock(localvar, "2", "BYTE", 3);
            next.append(rtcBlock);

            next = $("<next>");
            rtcBlock.append(next);

            var callBlock = this.createSetDateTimeBlock(localvar);
            next.append(callBlock);

            return setBlock;
        },
        createGetDate: function (name) {
            return WebMrbc.EObjectWorkspace.createGetDateTimeBlock(name);
        },
        createGetRetDate: function (name) {
            var subBlock = $("<block>");
            subBlock.attr("type", "data_join");

            var mutation = $("<mutation>");
            mutation.attr("items", 3);
            subBlock.append(mutation);

            var value = $("<value>");
            value.attr("name", "ADD0");
            subBlock.append(value);

            var rtcBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock$1(name, "0");
            value.append(rtcBlock);

            value = $("<value>");
            value.attr("name", "ADD1");
            subBlock.append(value);

            rtcBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock$1(name, "1");
            value.append(rtcBlock);

            value = $("<value>");
            value.attr("name", "ADD2");
            subBlock.append(value);

            rtcBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock$1(name, "2");
            value.append(rtcBlock);

            return subBlock;
        },
        createSetTime: function () {
            var localvar = "time";
            var setBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock(localvar);

            var next = $("<next>");
            setBlock.append(next);

            var rtcBlock = WebMrbc.EObjectWorkspace.createSetDateTimeItemBlock(localvar, "3", "BYTE", 0);
            next.append(rtcBlock);

            next = $("<next>");
            rtcBlock.append(next);

            rtcBlock = WebMrbc.EObjectWorkspace.createSetDateTimeItemBlock(localvar, "4", "BYTE", 1);
            next.append(rtcBlock);

            next = $("<next>");
            rtcBlock.append(next);

            var callBlock = this.createSetDateTimeBlock(localvar);
            next.append(callBlock);

            return setBlock;
        },
        createGetTime: function (name) {
            return WebMrbc.EObjectWorkspace.createGetDateTimeBlock(name);
        },
        createGetRetTime: function (name) {
            var subBlock = $("<block>");
            subBlock.attr("type", "data_join");

            var mutation = $("<mutation>");
            mutation.attr("items", 2);
            subBlock.append(mutation);

            var value = $("<value>");
            value.attr("name", "ADD0");
            subBlock.append(value);

            var rtcBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock$1(name, "3");
            value.append(rtcBlock);

            value = $("<value>");
            value.attr("name", "ADD1");
            subBlock.append(value);

            rtcBlock = WebMrbc.EObjectWorkspace.createGetDateTimeBlock$1(name, "4");
            value.append(rtcBlock);

            return subBlock;
        },
        createSetDateTimeBlock: function (localvar) {
            var callBlock = $("<block>");
            callBlock.attr("type", "call");

            var value = $("<value>");
            value.attr("name", "RET");
            callBlock.append(value);

            var rtcBlock = $("<block>");
            rtcBlock.attr("type", "rtc_settime");
            value.append(rtcBlock);

            value = $("<value>");
            value.attr("name", "DATE");
            rtcBlock.append(value);

            var vgetBlock = $("<block>");
            vgetBlock.attr("type", "variables_get");
            value.append(vgetBlock);

            var field = $("<field>");
            field.attr("name", "VAR");
            field.text(localvar);
            vgetBlock.append(field);

            return callBlock;
        },
        createSetStatement: function (valueRange) {
            var $t, $t1;
            var switchBlock = null;
            var ifBlock = null;
            var field;

            if (valueRange.getValues().length > 0) {
                switchBlock = $("<block>");
                switchBlock.attr("type", "switch_case_number");

                var mutation = $("<mutation>");
                mutation.attr("case", ((valueRange.getValues().length - 1) | 0));
                mutation.attr("default", 1);
                switchBlock.append(mutation);

                var i = 0;
                $t = Bridge.getEnumerator(valueRange.getValues());
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
                    field = $("<field>");
                    field.attr("name", System.String.concat("CASE_VALUE", i));
                    field.text(v.getVal().toString());
                    switchBlock.append(field);
                    i = (i + 1) | 0;
                }

                var value = $("<value>");
                value.attr("name", "SWITCH");
                switchBlock.append(value);

                var block0 = WebMrbc.EObjectWorkspace.createReceivedData("BYTE", 0);
                value.append(block0);

                for (i = 0; i < valueRange.getValues().length; i = (i + 1) | 0) {
                    var doStatement = $("<statement>");
                    doStatement.attr("name", System.String.concat("DO", i));
                    switchBlock.append(doStatement);

                    var subblock = $("<block>");
                    subblock.attr("type", "save_received_property");
                    doStatement.append(subblock);
                }
            }

            if (valueRange.getRanges().length > 0) {
                ifBlock = $("<block>");
                ifBlock.attr("type", "controls_if");

                var mutation1 = $("<mutation>");
                mutation1.attr("elseif", ((valueRange.getRanges().length - 1) | 0));
                mutation1.attr("else", 1);
                ifBlock.append(mutation1);

                var i1 = 0;
                $t1 = Bridge.getEnumerator(valueRange.getRanges());
                while ($t1.moveNext()) {
                    var r = $t1.getCurrent();
                    var value1 = $("<value>");
                    value1.attr("name", System.String.concat("IF", i1));
                    ifBlock.append(value1);

                    var block2 = this.rengeCheack("BYTE", 0, r.getMin(), r.getMax());
                    value1.append(block2);

                    i1 = (i1 + 1) | 0;
                }

                for (i1 = 0; i1 < valueRange.getRanges().length; i1 = (i1 + 1) | 0) {
                    var doStatement1 = $("<statement>");
                    doStatement1.attr("name", System.String.concat("DO", i1));
                    ifBlock.append(doStatement1);

                    var subblock1 = $("<block>");
                    subblock1.attr("type", "save_received_property");
                    doStatement1.append(subblock1);
                }

                {
                    var elseBlock = $("<statement>");
                    elseBlock.attr("name", "ELSE");
                    ifBlock.append(elseBlock);

                    var subblock2 = $("<block>");
                    subblock2.attr("type", "no_op");
                    elseBlock.append(subblock2);
                }
            }

            if (switchBlock != null) {
                var defaultBlock = $("<statement>");
                defaultBlock.attr("name", "DEFAULT");
                switchBlock.append(defaultBlock);

                if (ifBlock != null) {
                    defaultBlock.append(ifBlock);
                } else {
                    var subblock3 = $("<block>");
                    subblock3.attr("type", "no_op");
                    defaultBlock.append(subblock3);
                }

                return switchBlock;
            } else if (ifBlock != null) {
                return ifBlock;
            }

            return null;
        },
        rengeCheack: function (width, pos, min, max) {
            var block2 = $("<block>");
            block2.attr("type", "logic_operation");

            var field = $("<field>");
            field.attr("name", "OP");
            field.text("AND");
            block2.append(field);

            var value = $("<value>");
            value.attr("name", "A");
            block2.append(value);

            var a = this.compareNum(width, pos, "GTE", min);
            value.append(a);

            value = $("<value>");
            value.attr("name", "B");
            block2.append(value);

            var b = this.compareNum(width, pos, "LTE", max);
            value.append(b);

            return block2;
        },
        compareNum: function (width, pos, OP, num) {
            var block3 = $("<block>");
            block3.attr("type", "logic_compare");

            var field = $("<field>");
            field.attr("name", "OP");
            field.text(OP);
            block3.append(field);

            var value = $("<value>");
            value.attr("name", "A");
            block3.append(value);

            var block4 = WebMrbc.EObjectWorkspace.createReceivedData(width, pos);
            value.append(block4);

            value = $("<value>");
            value.attr("name", "B");
            block3.append(value);

            block4 = $("<block>");
            block4.attr("type", "math_number");
            value.append(block4);

            field = $("<field>");
            field.attr("name", "NUM");
            field.text(num.toString());
            block4.append(field);

            return block3;
        },
        openModifyView: function (callback) {
            if (!Bridge.staticEquals(this.callback, null)) {
                return;
            }
            this.callback = callback;
            WebMrbc.Views.EObjectModalView.setEObject(this.eobject, this.getImageUrl());
            WebMrbc.Views.EObjectModalView.addClosed(Bridge.fn.bind(this, this.eObjectModalView_Closed));
            WebMrbc.Views.EObjectModalView.render();
        },
        eObjectModalView_Closed: function (view, ok) {
            view.removeClosed(Bridge.fn.bind(this, this.eObjectModalView_Closed));

            WebMrbc.App.reloadToolbox();

            if (!Bridge.staticEquals(this.callback, null)) {
                this.callback(ok);
            }
            this.callback = null;
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifier%", this.eobject.identifier);
            template = System.String.replaceAll(template, "%attribute%", System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("EOBJ: ", System.Byte.format(this.eobject.type.classGroup.classGroupCode, "X2")), System.Byte.format(this.eobject.type.classCode, "X2")), System.Byte.format(this.eobject.instanceCode, "X2")), "<br>区分: "), this.eobject.attribute));
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });

    Bridge.define("WebMrbc.MainLoopWorkspace", {
        inherits: [WebMrbc.IClassWorkspace],
        identifier: null,
        workspace: null,
        config: {
            alias: [
            "getIdentifier", "WebMrbc$IModel$getIdentifier",
            "getWorkspace", "WebMrbc$IClassWorkspace$getWorkspace",
            "getImageUrl", "WebMrbc$IClassWorkspace$getImageUrl",
            "isPreset", "WebMrbc$IClassWorkspace$isPreset",
            "toCode", "WebMrbc$IClassWorkspace$toCode",
            "toDom", "WebMrbc$IClassWorkspace$toDom",
            "loadDom", "WebMrbc$IClassWorkspace$loadDom",
            "reloadToolbox", "WebMrbc$IClassWorkspace$reloadToolbox",
            "openModifyView", "WebMrbc$IClassWorkspace$openModifyView",
            "template", "WebMrbc$IClassWorkspace$template"
            ]
        },
        ctor: function (identifier) {
            this.$initialize();
            this.identifier = identifier;
            this.workspace = new Blockly.Workspace();
        },
        getIdentifier: function () {
            return this.identifier;
        },
        getWorkspace: function () {
            return this.workspace;
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineMainLoop(this, WebMrbc.Collections.LocalNode.getenode());
        },
        toDom: function () {
            return Blockly.Xml.workspaceToDom(this.workspace);
        },
        loadDom: function (xml) {
            this.workspace.clear();
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        },
        reloadToolbox: function (toolbox) {
            var echonet_category = $("#echonet_category", toolbox);

            echonet_category.html("");
        },
        openModifyView: function (callback) {
        },
        template: function (template) {
            template = System.String.replaceAll(template, "%identifier%", this.identifier);
            template = System.String.replaceAll(template, "%attribute%", "MainLoop");
            template = System.String.replaceAll(template, "%img%", this.getImageUrl());
            return template;
        }
    });

    Bridge.define("WebMrbc.ProceduresCallnoreturnBlock", {
        inherits: [WebMrbc.ProceduresCall],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.ProceduresCall.ctor.call(this, type);
            this.defType_ = "procedures_defnoreturn";
        },
        init: function () {
            this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            // Tooltip is set in renameProcedure.
            this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
            this.arguments_ = System.Array.init(0, null);
            this.quarkConnections_ = new (System.Collections.Generic.Dictionary$2(String,Blockly.Connection))();
            this.quarkIds_ = null;
        },
        customContextMenu: function (options) {
            var option = Bridge.merge(new WebMrbc.ContextMenuOption(), {
                enabled: true
            } );
            option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
            var name = this.getProcedureCall();
            var workspace = this.workspace;
            option.callback = function () {
                var def = Blockly.Procedures.getDefinition(name, workspace);
                if (def != null) {
                    def.select();
                }
            };
            options.push(option);
        }
    });

    Bridge.define("WebMrbc.ProceduresCallreturnBlock", {
        inherits: [WebMrbc.ProceduresCall],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.ProceduresCall.ctor.call(this, type);
            this.defType_ = "procedures_defreturn";
        },
        init: function () {
            this.appendDummyInput("TOPROW").appendField("", "NAME");
            this.setOutput(true);
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            // Tooltip is set in domToMutation.
            this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
            this.arguments_ = System.Array.init(0, null);
            this.quarkConnections_ = new (System.Collections.Generic.Dictionary$2(String,Blockly.Connection))();
            this.quarkIds_ = null;
        }
    });

    Bridge.define("WebMrbc.ProceduresDefnoreturnBlock", {
        inherits: [WebMrbc.ProceduresBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.ProceduresBlock.ctor.call(this, type);
            this.callType_ = "procedures_callnoreturn";
        },
        init: function () {
            var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, Blockly.Procedures.rename);
            nameField.setSpellcheck(false);
            this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(nameField, "NAME").appendField("", "PARAMS");
            this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
            if ((this.workspace.options.comments || (this.workspace.options.parentWorkspace != null && this.workspace.options.parentWorkspace.options.comments)) && !System.String.isNullOrEmpty(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT)) {
                this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
            }
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
            this.arguments_ = System.Array.init(0, null);
            this.setStatements_(true);
            this.statementConnection_ = null;
        },
        getProcedureDef: function () {
            return [this.getFieldValue("NAME"), this.arguments_, false];
        }
    });

    Bridge.define("WebMrbc.ProceduresDefreturnBlock", {
        inherits: [WebMrbc.ProceduresBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.ProceduresBlock.ctor.call(this, type);
            this.callType_ = "procedures_callreturn";
        },
        init: function () {
            var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, Blockly.Procedures.rename);
            nameField.setSpellcheck(false);
            this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(nameField, "NAME").appendField("", "PARAMS");
            this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
            this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
            if ((this.workspace.options.comments || (this.workspace.options.parentWorkspace != null && this.workspace.options.parentWorkspace.options.comments)) && !System.String.isNullOrEmpty(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT)) {
                this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
            }
            this.setColour(WebMrbc.ProceduresBlock.HUE);
            this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
            this.arguments_ = System.Array.init(0, null);
            this.setStatements_(true);
            this.statementConnection_ = null;
        },
        getProcedureDef: function () {
            return [this.getFieldValue("NAME"), this.arguments_, true];
        }
    });

    Bridge.define("WebMrbc.SwitchCaseNumberCaseBlock", {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseNumberBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberCaseBlock
         * @memberof WebMrbc.SwitchCaseNumberCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip("switch");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.SwitchCaseNumberDefaultBlock", {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseNumberBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberDefaultBlock
         * @memberof WebMrbc.SwitchCaseNumberDefaultBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("default");
            this.setPreviousStatement(true);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.SwitchCaseNumberFirstCaseBlock", {
        inherits: [WebMrbc.SwitchCaseNumberBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseNumberBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseNumberFirstCaseBlock
         * @memberof WebMrbc.SwitchCaseNumberFirstCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setNextStatement(true);
            this.setTooltip("case when");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.SwitchCaseTextCaseBlock", {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseTextBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextCaseBlock
         * @memberof WebMrbc.SwitchCaseTextCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setTooltip("switch");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.SwitchCaseTextDefaultBlock", {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseTextBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextDefaultBlock
         * @memberof WebMrbc.SwitchCaseTextDefaultBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("default");
            this.setPreviousStatement(true);
            this.setTooltip("");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.SwitchCaseTextFirstCaseBlock", {
        inherits: [WebMrbc.SwitchCaseTextBlock],
        ctor: function (type) {
            this.$initialize();
            WebMrbc.SwitchCaseTextBlock.ctor.call(this, type);
        },
        /**
         * Block for swicth/case/default condition.
         *
         * @instance
         * @public
         * @override
         * @this WebMrbc.SwitchCaseTextFirstCaseBlock
         * @memberof WebMrbc.SwitchCaseTextFirstCaseBlock
         * @return  {void}
         */
        init: function () {
            this.setColour(210);
            this.appendDummyInput().appendField("case");
            this.setNextStatement(true);
            this.setTooltip("case when");
            this.contextMenu = false;
        }
    });

    Bridge.define("WebMrbc.ENodeWorkspace", {
        inherits: [WebMrbc.EObjectWorkspace],
        config: {
            alias: [
            "getImageUrl", "WebMrbc$IClassWorkspace$getImageUrl",
            "isPreset", "WebMrbc$IClassWorkspace$isPreset",
            "toCode", "WebMrbc$IClassWorkspace$toCode"
            ]
        },
        ctor: function (enode) {
            this.$initialize();
            WebMrbc.EObjectWorkspace.ctor.call(this, enode);
        },
        getenode: function () {
            return Bridge.cast(this.eobject, WebMrbc.JsonNodeInfo);
        },
        getImageUrl: function () {
            return "img/no_image.png";
        },
        isPreset: function () {
            return true;
        },
        toCode: function () {
            return Blockly.Ruby.defineENode(Bridge.cast(this.eobject, WebMrbc.JsonNodeInfo), this.getWorkspace());
        }
    });
});
