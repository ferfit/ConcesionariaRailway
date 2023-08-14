"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
export const checkRoleAuth =
     (roles: any) => async (req: any, res: any, next: any) => {
        try {
            const token: any = req.headers.authorization.split(" ")[1];

            const tokenVerificado: any = await verifyToken(token);

            req.tokenDatosUsuario = {
                id: tokenVerificado.id,
                rol: tokenVerificado.rol,
            };

            const usuario: any = await Usuario.findById(tokenVerificado.id);

            let arrRoles: string[] = [];

            if (arrRoles.concat(roles).includes(usuario.rol)) {
                next();
                return req.tokenDatosUsuario;
            } else {
                return res.status(401).json({
                    ok: false,
                    mensaje:
                        "No tienes autorización para acceder a este recurso.",
                });
            }
        } catch (error) {
            console.log(error, "error del lado del backend en checkRoleAuth");
        }
};*/
//# sourceMappingURL=auth-rol.js.map