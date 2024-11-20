import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../data/axiosConfig";

interface UserContextProps {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
   updateUser: (updatedUser: Partial<User>) => void;
   refreshUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
   user: null,
   setUser: () => {},
   updateUser: () => {},
   refreshUser: async () => {},
});

interface ProviderProps {
   children: ReactNode;
}

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null);

   // Função para buscar os dados do usuário
   const refreshUser = async () => {
      try {
         const userSlug = await AsyncStorage.getItem("userSlug");
         if (userSlug) {
            const response = await api.get(`/user/${userSlug}`);
            const data = response.data.user;
            setUser(data);
         } else {
            console.error("Nenhum userSlug encontrado no AsyncStorage");
         }
      } catch (error) {
         console.error("Falha ao buscar dados do usuário", error);
      }
   };

   useEffect(() => {
      refreshUser();
   }, []);

   // Função para atualizar os dados do usuário no contexto
   const updateUser = (updatedUser: Partial<User>) => {
      setUser((prevUser) =>
         prevUser ? { ...prevUser, ...updatedUser } : prevUser
      );
   };

   return (
      <UserContext.Provider value={{ user, setUser, updateUser, refreshUser }}>
         {children}
      </UserContext.Provider>
   );
};
