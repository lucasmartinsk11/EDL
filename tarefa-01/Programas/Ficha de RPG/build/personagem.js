var personagem = /** @class */ (function () {
    function personagem() {
        var _this = this;
        this.setName = function (name) {
            _this.name = name;
        };
        this.setClass = function (clasS) {
            _this.clasS = clasS;
        };
        this.setLevel = function (level) {
            _this.level = level;
        };
        this.setHp = function (hp) {
            _this.hp = hp;
        };
        this.setMana = function (mana) {
            _this.mana = mana;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getClass = function () {
            return _this.clasS;
        };
        this.getLevel = function () {
            return _this.level;
        };
        this.getHp = function () {
            return _this.hp;
        };
        this.getMana = function () {
            return _this.mana;
        };
    }
    return personagem;
}());
