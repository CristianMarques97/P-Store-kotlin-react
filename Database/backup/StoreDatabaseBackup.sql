PGDMP         :                w            PStoreDatabase    11.2    11.2 	    �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16393    PStoreDatabase    DATABASE     �   CREATE DATABASE "PStoreDatabase" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
     DROP DATABASE "PStoreDatabase";
             postgres    false            �            1259    16394 	   customers    TABLE     |  CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    lastname character varying(30) NOT NULL,
    email character varying NOT NULL,
    senha character varying(28) NOT NULL,
    "CPF" character varying(14) NOT NULL,
    data_nascimento date NOT NULL,
    profile_icon character varying,
    adm boolean NOT NULL,
    "CEP" character varying NOT NULL,
    logradouro character varying NOT NULL,
    numero character varying NOT NULL,
    bairro character varying NOT NULL,
    cidade character varying NOT NULL,
    estado character varying NOT NULL,
    complemento character varying
);
    DROP TABLE public.customers;
       public         postgres    false            �
          0    16394 	   customers 
   TABLE DATA               �   COPY public.customers (id, name, lastname, email, senha, "CPF", data_nascimento, profile_icon, adm, "CEP", logradouro, numero, bairro, cidade, estado, complemento) FROM stdin;
    public       postgres    false    196   /       }
           2606    16405    customers CPF_unique 
   CONSTRAINT     R   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT "CPF_unique" UNIQUE ("CPF");
 @   ALTER TABLE ONLY public.customers DROP CONSTRAINT "CPF_unique";
       public         postgres    false    196            
           2606    16403    customers email_unique 
   CONSTRAINT     R   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT email_unique UNIQUE (email);
 @   ALTER TABLE ONLY public.customers DROP CONSTRAINT email_unique;
       public         postgres    false    196            �
           2606    16401    customers id_primary_key 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT id_primary_key PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT id_primary_key;
       public         postgres    false    196            �
      x������ � �     