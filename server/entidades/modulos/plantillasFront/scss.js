"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantillaComponentScss = void 0;
exports.plantillaComponentScss = `
.inventory-grid {
    grid-template-columns: 48px auto 40px;

    @screen sm {
        grid-template-columns: 48px auto 112px 72px;
    }

    @screen md {
        grid-template-columns: 48px 112px auto 112px 72px;
    }

    @screen lg {
        grid-template-columns: auto 96px 90px;
    }
}

`;
//# sourceMappingURL=scss.js.map